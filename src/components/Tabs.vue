<template>
  <div>
  
    
      <v-container fluid style="width: 100% ">
        <v-card  >
          <v-sheet elevation="6" style="height:700px  " >
            <v-tabs
              background-color="cyan"
              dark
              next-icon="mdi-arrow-right-bold-box-outline"
              prev-icon="mdi-arrow-left-bold-box-outline"
              show-arrows
            >
              <v-tabs-slider color="yellow"></v-tabs-slider>
              <v-tab> YOUR PRODUCTS </v-tab>

              <v-tab-item >
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <Table />
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab> PERMISSIONS & PRIVACY OPTIONS </v-tab>

              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row><Permissions/> </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-sheet>
        </v-card>
      </v-container>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './Table.vue'
import Permissions from './Permissions.vue'


    @Component({

        components: {
            Table,
            Permissions,
            
        }
    })
    export default class  extends Vue {
      
    
   
    }
</script>

<style scoped>
</style>