<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use Socialite;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    //
    public function getSocialRedirect($account)
    {
        try {
            return Socialite::with($account)->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('/login');
        }
    }
    public function getSocialCallback($account)
    {
        $socialUser = Socialite::with($account)->user();
        $user = User::where( 'provider_id', '=', $socialUser->id )
            ->where( 'provider', '=', $account )
            ->first();
        if ($user == null) {
            $newUser = new User();

            $newUser->name        = $socialUser->getNickname();
            $newUser->email       = $socialUser->getEmail() ? : '';
            $newUser->avatar      = $socialUser->getAvatar();
            $newUser->password    = '';
            $newUser->provider    = $account;
            $newUser->provider_id = $socialUser->getId();

            $newUser->save();
            $user = $newUser;
        }

        Auth::login( $user );

        return redirect('/#/home');
    }
}
