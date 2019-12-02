<template>
    <div class="help">
        <v-layout wrap text-center>
            <v-flex xs12>
                <h1>Hilfe und Support</h1>
                <br />

                <div id="app">
                    <v-app id="inspire">
                        <v-expansion-panels>
                            <v-expansion-panel
                                v-for="item in helpData"
                                :key="item"
                            >
                                <v-expansion-panel-header>{{
                                    item.title
                                }}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{ item.content }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-app>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
var helpDataJson = require('../database/test');

export default {
    name: 'Help',
    data() {
        return { helpData: helpDataJson.items };
    }
};
</script>

<style scoped></style>
