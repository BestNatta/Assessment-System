<template>
    <div class="d-inline">
        <b-button variant="outline-primary">ผลิต</b-button>
        <b-button class="mx-3" variant="outline-primary">ซื้อมา ขายไป</b-button>
        <b-button variant="outline-primary">บริการ</b-button>
    </div>
</template>

<script>
export default {
    name: 'selectMenu',
    props: [
        "ids"
    ],
    mounted() {     
        // console.log(this.ids)
    }
}


</script>