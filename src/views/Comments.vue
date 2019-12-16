<template>
<v-container>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
            <v-toolbar color="navy" dark>
                <v-toolbar-title>Kommentare</v-toolbar-title>

            </v-toolbar>
            <v-card>
            <v-list two-line>
                <template v-for="(item, index) in items">
                    <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            inset
                    >
                        {{ item.header }}
                    </v-subheader>

                    <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            inset
                    ></v-divider>

                    <v-list-item
                            v-else
                            :key="item.title"
                            ripple

                    >
                        <v-list-item-avatar>
                            <img :src="item.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>


                </template>
                    <v-content color="grey" method="post" @submit.prevent="submit">
                        <textarea v-model="data.message" class="message" id="message" name="message" placeholder="Dein Kommentar..." required></textarea><br>
                        <!--<input v-model="data.name" class="input-name" type="text" name="name" placeholder="" required>-->

                        <v-card-actions>
                            <div class="btn">
                                <v-btn :disabled="loading" type="submit" value="Comment">Kommentieren</v-btn>
                            </div>
                        </v-card-actions>

                    </v-content>

            </v-list>



            </v-card>


        </v-col>
    </v-row>
</v-container>

</template>

<script>
    export default {
        name: 'Comments',
        data() {
            return {
                loading: false,
                data: {},

            items: [
                {
                    header: 'Aktuell',
                },
                { divider: true },
                {
                    avatar: 'https://picsum.photos/250/300?image=660',
                    title: 'Neues aus Furtwangen',
                    subtitle:
                        "<span class='text--primary'>Julian</span> &mdash; Hallo",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=821',
                    title: 'Ersti Party <span class="grey--text text--lighten-1"></span>',
                    subtitle:
                        "<span class='text--primary'>Lea</span> &mdash; Ich wünschte ich könnte kommen.",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=783',
                    title: ':)',
                    subtitle:
                        "<span class='text--primary'>Sabrina</span> &mdash; hallo zusammen",
                },
                {
                    header: 'Gestern',
                },
                { divider: true },
                {
                    avatar: 'https://picsum.photos/250/300?image=1006',
                    title: 'Haustiere?',
                    subtitle:
                        "<span class='text--primary'>Mia</span> &mdash; Meine neue Katze, süß oder?",
                },
                {
                    header: 'Letzte Woche',
                },
                { divider: true },
                {
                    avatar: 'https://picsum.photos/250/300?image=1008',
                    title: 'Mensa',
                    subtitle:
                        "<span class='text--primary'>Nick</span> &mdash; Das gab es heute in der Mensa",
                },
            ]
            }
        },

        methods: {
            submit() {

                this.loading = true;

                // Save Comment
                this.$http.post('http://localhost:3434', this.data).then((response) => {
                    // success callback

                    // fire event for comment
                    this.$emit('commented', response.data);

                    // Clear the message
                    this.data.message = "";

                    this.loading = false;
                }, () => {
                    // error callback
                    this.loading = false;
                });

            }
        }
    }
</script>

<style scoped>

    .message {
        padding-right: 230px;
        padding-left: 20px;
    }

    .btn {
        padding-left: 140px;
    }

</style>