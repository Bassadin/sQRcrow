<template>

    <v-row justify="center">

        <v-col cols="12" sm="8" md="6">

            <div class="header">
                <h1>Willkommen im Kommentarbereich</h1>
            </div>

            <div class="comments">
            <v-card>
                <v-toolbar color="navy" dark>

                    <v-toolbar-title>Kommentare</v-toolbar-title>

                </v-toolbar>

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
                </v-list>
            </v-card>
            </div>

            <div class="footer">
                <v-footer padless>
                    <v-col
                            class="text-center"
                            cols="12"
                    >
                        {{ new Date().getFullYear() }} — <strong>sQRcrow</strong>
                    </v-col>
                </v-footer>
            </div>

        </v-col>
    </v-row>

</template>

<script>

    export default {
        data () {
            return {
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


                ],
            }
        },
    }

</script>

<style>

    .header {
       margin-left: 70px;
        color: #00023B;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .comments {
        margin-left: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .footer {

        position: center;
        bottom: 0;
        width: 100%;
    }
</style>
