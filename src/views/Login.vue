<template>
    <div class="Login">
       <div class="h1">
        <h1>Log in</h1>
       </div>
        <div class="p">
        <p>Log in to your account</p>
        </div>
        <v-form v-model="valid">
                <v-card>


                    <v-col
                            cols="12"
                            md="4"
                    >
                <div class="col-xl" >
                        <v-text-field
                                v-model="username"
                                :error-messages="nameErrors"
                                :rules="nameRules"
                                label="Benutzername"

                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>

                </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                    <div class="col-xl-1">
                        <v-text-field
                                v-model="password"
                                :error-messages="nameErrors"
                                :rules="nameRules"
                                label="Passwort"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                    </div>
                    </v-col>


                    <v-btn class="mr-4" tile outlined color="" @click="submit" >Okay</v-btn>

            </v-card>

        </v-form>

    </div>




</template>


<script>
   export default {
        name: 'Login',
    };



</script>


<style scoped>

    .mr-4 {
        margin-left: 420px;
        background-color: rgba(0, 0, 50, 0.2);
        padding-bottom: 20px;
    }

    .col-xl {
        margin-left: 300px;
    }

    .col-xl-1{
        margin-left: 300px;
    }

    .h1 {
        margin-left: 590px;
        margin-top: 80px;
        padding-top: 20px;
        color: #00023B;
    }

    .p {
        margin-left: 550px;
        color: #00023B;
    }

    .Login {
        background-color: rgba(90, 20, 10, 0.4);
    }

</style>
