<template>
    <v-row justify="center">
        <v-col cols="10" sm="8" md="10">
            <h-layout xs12 md8 text-center wrap>
                <div class="text-center">
                    <h1>Hilfe und Support</h1>
                </div>
                <v-expansion-panels :popout="true">
                    <v-expansion-panel v-for="item in helpData" :key="item">
                        <v-expansion-panel-header>
                            {{ item.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>{{
                            item.content
                        }}</v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </h-layout>
        </v-col>
    </v-row>
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

<style scoped>
.header {
}
</style>
