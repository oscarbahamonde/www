<template>
  <PageWrapper class="flex flex-col justify-center items-center">
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div class="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u//ob.png"
          class="inline-block rounded-full"
          alt="oscarbahamonde"
          width="100"
          height="100"
        />
        <Button
          size="xs"
          text="Oscar Bahamonde  ()"
          class="font-extrabold mt-4"
          href="https://github.com/oscarbahamonde"
        />
      </div>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>
