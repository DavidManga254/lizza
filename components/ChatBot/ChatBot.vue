<template>
    <div>
        <slot/>
    </div>
    <div class="chatbot">
        oe
        <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
        class="dialog ma-0 pa-0"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >From the bottom</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <Chat/>
        </template>
      </v-dialog>
    </div>
</template>

<style scoped>
    .chatbot{
        @apply fixed bottom-0 right-0 bg-red-500
    }
    .dialog{
        @apply fixed right-0 text-white bottom-0 justify-end items-end m-0 p-0
    }
    .absoluter{
        @apply bg-red-500 h-[80vh] w-[50vw]  m-0 p-0
    }
</style>