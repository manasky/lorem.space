<div id={name} class="pt-6 px-4 pb-20 min-h-[50vh] w-full grid place-content-center">
  <div class="grid gap-10 xl:grid-cols-2 max-w-7xl">

    <ItemList
    imageData={[{
      category: apiPath,
      width: width,
      height: height,
    }]}
    items={[
      {
        title: listItemTitle,
        desc: listItemDesc,
      },
      {
        title: listItemTitle,
        desc: listItemDesc,
      },
      {
        title: listItemTitle,
        desc: listItemDesc,
      },
    ]}
  />
  <div>
    <SectionInfo
      title={sectionTitle}
      icon={sectionIcon}
    />
    <Codes textToCopy="https://api.lorem.space/image{apiPath}?w={width}&h={height}">https://api.lorem.space/image<span class="text-primary">{apiPath}</span>?w=<span class="text-primary">{width}</span>&h=<span class="text-primary">{height}</span></Codes>
  </div>

  </div>
</div>

<script>

  import ItemList from '../components/ItemList.svelte'
  import SectionInfo from '../components/SectionInfo.svelte'
  import Codes from '../components/Codes.svelte'

  export let name = "";
  export let width = 150;
  export let height = 220;
  export let apiPath = "";
  export let listItemTitle = "Title";
  export let listItemDesc = "Description";
  export let sectionTitle = "Random Image";
  export let sectionIcon = "";

</script>