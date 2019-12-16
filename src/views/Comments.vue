<template>
<v-container>
    <div class="comment-box" id="comment" >

        <v-card text-center method="post" @submit.prevent="submit">
            <textarea v-model="data.message" class="message" name="message" id="message"  placeholder="Dein Kommentar..." required></textarea><br>
            <!--<input v-model="data.name" class="input-name" type="text" name="name" placeholder="" required>-->

            <v-card-actions>

                <div class="btn">
                    <v-btn :disabled="loading" type="submit" value="Comment">Kommentieren</v-btn>
                </div>

            </v-card-actions>

        </v-card>
    </div>

</v-container>

</template>

<script>
    export default {
        name: 'Comments',
        data() {
            return {
                loading: false,
                data: {}
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

    .comment-box {
        position: center;
        padding-right: 300px;
        padding-left: 300px;
    }

    .message {
        padding-right: 300px;
        margin-left: 40px;
    }

    .btn {
        padding-left: 200px;
    }
</style>