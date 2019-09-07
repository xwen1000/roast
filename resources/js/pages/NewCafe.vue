<template>
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="咖啡店名" v-model="name">
            <small id="name" class="form-text text-muted" v-show="!validations.name.is_valid">
                {{ validations.name.text }}
            </small>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="地址" v-model="address">
            <small id="address" class="form-text text-muted" v-show="!validations.address.is_valid">
                {{ validations.address.text }}
            </small>
        </div>
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="城市" v-model="city">
            <small id="city" class="form-text text-muted" v-show="!validations.city.is_valid">
                {{ validations.city.text }}
            </small>
        </div>
        <div class="form-group">
            <label for="state">State</label>
            <input type="text" class="form-control" id="state" placeholder="省份" v-model="state">
            <small id="state" class="form-text text-muted" v-show="!validations.state.is_valid">
                {{ validations.state.text }}
            </small>
        </div>
        <div class="form-group">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="邮编" v-model="zip">
            <small id="zip" class="form-text text-muted" v-show="!validations.zip.is_valid">
                {{ validations.zip.text }}
            </small>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="submitNewCafe()">Submit</button>
    </form>
</template>

<script>
export default {
     data() {
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                validations: {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    address: {
                        is_valid: true,
                        text: ''
                    },
                    city: {
                        is_valid: true,
                        text: ''
                    },
                    state: {
                        is_valid: true,
                        text: ''
                    },
                    zip: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        },
        methods: {
            submitNewCafe: function () {
                if (this.validateNewCafe()) {
                    this.$store.dispatch('addCafe', {
                        name: this.name,
                        address: this.address,
                        city: this.city,
                        state: this.state,
                        zip: this.zip
                    })
                }
            },
            validateNewCafe: function () {
                let validNewCafeForm = true

                if( this.name.trim() === '' ){
                    validNewCafeForm = false
                    this.validations.name.is_valid = false
                    this.validations.name.text = '请输入咖啡店的名字'
                }else{
                    this.validations.name.is_valid = true
                    this.validations.name.text = ''
                }

                if( this.address.trim() === '' ){
                    validNewCafeForm = false
                    this.validations.address.is_valid = false
                    this.validations.address.text = '请输入咖啡店的地址!'
                }else{
                    this.validations.address.is_valid = true
                    this.validations.address.text = ''
                }

                if( this.city.trim() === '' ){
                    validNewCafeForm = false
                    this.validations.city.is_valid = false
                    this.validations.city.text = '请输入咖啡店所在城市!'
                }else{
                    this.validations.city.is_valid = true
                    this.validations.city.text = ''
                }

                if( this.state.trim() === '' ){
                    validNewCafeForm = false
                    this.validations.state.is_valid = false
                    this.validations.state.text = '请输入咖啡店所在省份!'
                }else{
                    this.validations.state.is_valid = true
                    this.validations.state.text = ''
                }

                if( this.zip.trim() === '' || !this.zip.match(/(^\d{6}$)/) ){
                    validNewCafeForm = false
                    this.validations.zip.is_valid = false
                    this.validations.zip.text = '请输入有效的邮编地址!'
                }else{
                    this.validations.zip.is_valid = true
                    this.validations.zip.text = ''
                }
                return validNewCafeForm
            }
        }
}
</script>

<style scoped>

</style>