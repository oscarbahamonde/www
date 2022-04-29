<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.blank.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>
          {{ response }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const response = await fetch('https://smartpro.solutions').then((res) =>
  res.text()
)
</script>
