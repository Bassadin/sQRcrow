<template>
    <div id="Login">
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="username"
                                :error-messages="nameErrors"
                                :rules="nameRules"
                                label="Benutzername"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="password"
                                :error-messages="nameErrors"
                                :rules="nameRules"
                                label="Passwort"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-btn class="mr-4" @click="submit">Okay</v-btn>

                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
    };
</script>

<style scoped>
    .Login {
    width: 300px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 5px;
    }
</style>
