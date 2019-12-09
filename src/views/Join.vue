<template>
    <div class="Join">
        <v-content>
            <v-container class="fill-height" fluid>

                <v-row align="center" justify="center">

                    <v-col cols="12" sm="8" md="4">

                        <v-flex mb-4>
                            <div class="h1 headline text-center">
                                <h1>Join</h1>
                            </div>
                        </v-flex>

                        <v-card class="elevation-12">
                            <v-toolbar color="#546e7a" light >
                                <div class="welcome">
                                    <v-toolbar-title>Registriere dich bei sQRcrow</v-toolbar-title>
                                </div>
                                <v-spacer />

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            id="forename"
                                            label="Vorname"
                                            name="forename"
                                            prepend-icon="mdi-account-box"
                                            type="forename"
                                    />
                                    <v-text-field
                                            id="familyname"
                                            label="Nachname"
                                            name="familyname"
                                            prepend-icon="mdi-account-box"
                                            type="familyname"
                                    />
                                    <v-text-field
                                            id="email"
                                            label="E-Mail"
                                            name="email"
                                            prepend-icon="mdi-email"
                                            type="email"
                                    />
                                    <v-text-field
                                            id ="username"
                                            label="Benutzername"
                                            name="username"
                                            prepend-icon="mdi-account-circle"
                                            type="username"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Passwort"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            state="text.length >= 10"
                                    />
                                </v-form>
                            </v-card-text>

                            <div class="check">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox">{{ label=" ich habe die AGB gelesen und akzeptiere diese" }}</label>
                            </div>

                            <v-card-actions>
                                <v-spacer />
                                <div class="btn">
                                    <v-btn color="#546e7a" icon="">registrieren</v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>

                        <div class="next text-center">
                            <p>Du hast schon einen Account? Melde dich <a href="/Login">hier</a> an</p>
                        </div>

                    </v-col>

                </v-row>
            </v-container>
        </v-content>

        <div class="footer">
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} — <strong>sQRcrow</strong>
                </v-col>
            </v-footer>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Join'

};

</script>

<style scoped>

    .h1 {
        padding-bottom: 20px;
    }

    .welcome {
        position: center;
        padding-left: 30px;
    }

    .next {
        padding-top: 20px;
        padding-bottom: 50px;
    }

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.check {
    padding-left: 22px;
    padding-bottom: 10px;
}

.btn {
    width: 53%;
}

</style>
