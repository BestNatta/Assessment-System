<template>
    <div>
        <b-row>
            <b-col class="d-flex justify-content-center">
                <header>
                    <div class="temp"></div>
                    <div class="logo-haeder">
                    </div>
                    <div class="square-header">
                        <div class="content">
                            <p>317 KAMOLSUKOSOL BUILDING, FLOOR 9, ROOM 9B, SILOM ROAD,</p>
                            <p>SILOM SUB DISTRICT, BANGKOK 10500</p>
                            <p>TEL/FAX. 02-635-5144</p>
                        </div>
                    </div>
                </header>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// import '../../../assets/scss/stylePDF.scss';
import '../../../assets/scss/style.scss';
export default {
    name: 'header-pdf',
    data(){
    return{
        besttext:'test1234'
    }
}
}

</script>