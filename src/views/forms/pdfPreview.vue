<template>
    <div class="layout-px-spacing">
        <!-- <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Preview</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal> -->


        <div class="container">
            <!-- <div class="overlay" :class="{ show: isOpen }" @click="isOpen = !isOpen"></div> -->
            <!-- <div class="app-settings" :class="{ active: isOpen }"> -->
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false">
                    <!-- <p>{{ $t('quotation.doc-management') }}</p> -->
                    <a>
                        <b-button variant="info" @click="exportToPDF">
                            Export
                        </b-button>
                    </a>
                    <a>
                        <!-- <b-button class="a-to-button" variant="warning" @click="editDocument">
                            Edit
                        </b-button> -->
                    </a>
                </scrollactive>
            </div>
            <!-- </div> -->
            <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
                <b-col class="d-flex" cols="12">
                    <div class="col-xl-12 col-lg-12 col-md-6 col-sm-3 col-12 d-flex justify-content-center">
                        <div id="element-to-convert">
                            <section class="pdf-content page" size="A4" ref="pdfContent">
                                <header>
                                    <div class="temp-1"></div>
                                    <div class="logo-haeder">
                                        <!-- <img src="/./src/assets/images/logo.png" alt=""> -->
                                    </div>
                                    <div class="square-header">
                                        <div class="content">
                                            <p>317 KAMOLSUKOSOL BUILDING, FLOOR 9, ROOM 9B, SILOM ROAD,</p>
                                            <p>SILOM SUB DISTRICT, BANGKOK 10500</p>
                                            <p>TEL/FAX. 02-635-5144</p>
                                        </div>
                                    </div>
                                </header>

                                <section class="con-content">
                                    <div class="chapter">
                                        <h3>ส่วนที่ 1 บทสรุปผู้บริหาร</h3>
                                    </div>

                                    <b-row class="con-table mx-0">
                                        <b-col cols="1" class="frame d-flex justify-content-center align-items-center">
                                            <p>ข้อที่</p>
                                        </b-col>
                                        <b-col class="frame d-flex justify-content-center align-items-center">
                                            <p>ข้อสังเกต</p>
                                        </b-col>
                                        <b-col class="frame text-center">
                                            <p>ระดับความสำคัญของผลกระทบ</p>
                                            <b-row class="">
                                                <b-col cols="2" class="frame level-height">
                                                    <p>สุง</p>
                                                </b-col>
                                                <b-col cols="4" class="frame level-moderate">
                                                    <p>ปานกลาง</p>
                                                </b-col>
                                                <b-col cols="2" class="frame level-low">
                                                    <p>ต่ำ</p>
                                                </b-col>
                                                <b-col cols="2" class="frame level-aic">
                                                    <p>AIC</p>
                                                </b-col>
                                                <b-col cols="2" class="frame level-total">
                                                    <p>รวม</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </section>
                                <!-- <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">ชื่อบริษัท / Company name</span>
                                        <span> บริษัท A </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">เลขประจำตัวผู้เสียภาษี</span>
                                        <span> 2021071200001 </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="12">
                                        <span class="detail-label">ที่อยู่ / Address</span>
                                        <span> 317 อาคารกมลสุโกศล ชั้น 9 ห้อง 9B ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร
                                            10500 </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">เบอร์โทรศัพ / Tel.</span>
                                        <span> 000-000-00000 </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">E-mail:</span>
                                        <span> demo_account_lin@accrevo.com </span>
                                    </b-col>
                                </b-row>
                                <div class="mx-4">
                                    <hr class="my-1" />
                                </div>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">ลูกค้า / Customer</span>
                                        <span> บริษัท B </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">สาขา / Branch</span>
                                        <span> สำนักงานใหญ </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="12">
                                        <span class="detail-label">ที่อยู่ / Address</span>
                                        <span> กรุงเทพมหานคร </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">เลขผู้เสียภาษี / Tax ID</span>
                                        <span> 0102555433456 </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">วันที่ / Issue</span>
                                        <span> 22-12-2022 </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">เลขที่ / No.</span>
                                        <span> - </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">ผู้ติดต่อ / Attention</span>
                                        <span> - </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-0">
                                    <b-col cols="6">
                                        <span class="detail-label">อ้างอิง / Ref.</span>
                                        <span> - </span>
                                    </b-col>
                                    <b-col cols="6">
                                        <span class="detail-label">เบอร์โทรศัพ / Tel.</span>
                                        <span> - </span>
                                    </b-col>
                                </b-row>
                                <b-row class="detail-container mx-3">
                                    <table>
                                        <thead>
                                            <th height="50px" class="detail-label table-text-size ">รหัส <br />No.</th>
                                            <th width="350px" class="detail-label table-text-size">รายการสินค้า
                                                <br />Product
                                            </th>
                                            <th width="50px" class="detail-label table-text-size">จำนวน<br />amount</th>
                                            <th width="150px" class="detail-label table-text-size">ราคาต่อหน่วย
                                                (บาท)<br />Unit price(baht)</th>
                                            <th width="150px" class="detail-label table-text-size">
                                                มูลค่าก่อนภาษี<br />Pre-tax amount (baht)</th>
                                        </thead>

                                        <tr v-for="(item, idx) in items" v-bind:key="idx">
                                            <td>{{ item.code }}</td>
                                            <td>
                                                <div>{{ item.name }}</div>
                                                <div>{{ item.description }}</div>
                                            </td>
                                            <td>{{ item.amount }}</td>
                                            <td>{{ item.unitPrice }}</td>
                                            <td>{{ item.amount * item.unitPrice }}</td>
                                        </tr>
                                    </table>
                                </b-row> -->
                                <!-- <b-row class="detail-container mx-3 mt-3">
                                    <b-col>
                                        <b-row>
                                            <div class="remarks detail-label bg-gray">
                                                หมายเหตุ / Remarks
                                            </div>
                                        </b-row>
                                        <b-row>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, molestias!
                                            Facilis maiores aliquam quasi corrupti animi inventore? Quo fuga totam,
                                            inventore doloremque omnis sequi hic! Ipsa itaque inventore nesciunt ut?
                                        </b-row>
                                        <div class="page" size="A4">
                                            <section class="pdf-content" ref="pdfContent">
                                                <section class="report-info d-flex justify-content-between">
                                                    <div>
                                                        <section class="image-container">
                                                            <img class="user-image" src="" alt="User Image"
                                                                ref="userImage" />
                                                        </section>
                                                        <section class="user-details"></section>
                                                    </div>
                                                    <div class="justify-content-end headerArea">
                                                        <h1 class="headerDoc">ใบเสนอราคา</h1>
                                                        <h5>Quotation</h5>
                                                    </div>
                                                </section>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">ชื่อบริษัท / Company name</span>
                                                        <span> บริษัท A </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">เลขประจำตัวผู้เสียภาษี</span>
                                                        <span> 2021071200001 </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="12">
                                                        <span class="detail-label">ที่อยู่ / Address</span>
                                                        <span> 317 อาคารกมลสุโกศล ชั้น 9 ห้อง 9B ถนนสีลม แขวงสีลม เขตบางรัก
                                                            กรุงเทพมหานคร 10500 </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">เบอร์โทรศัพ / Tel.</span>
                                                        <span> 000-000-00000 </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">E-mail:</span>
                                                        <span> demo_account_lin@accrevo.com </span>
                                                    </b-col>
                                                </b-row>
                                                <div class="mx-4">
                                                    <hr class="my-1" />
                                                </div>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">ลูกค้า / Customer</span>
                                                        <span> บริษัท B </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">สาขา / Branch</span>
                                                        <span> สำนักงานใหญ </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="12">
                                                        <span class="detail-label">ที่อยู่ / Address</span>
                                                        <span> กรุงเทพมหานคร </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">เลขผู้เสียภาษี / Tax ID</span>
                                                        <span> 0102555433456 </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">วันที่ / Issue</span>
                                                        <span> 22-12-2022 </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">เลขที่ / No.</span>
                                                        <span> - </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">ผู้ติดต่อ / Attention</span>
                                                        <span> - </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-0">
                                                    <b-col cols="6">
                                                        <span class="detail-label">อ้างอิง / Ref.</span>
                                                        <span> - </span>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <span class="detail-label">เบอร์โทรศัพ / Tel.</span>
                                                        <span> - </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="detail-container mx-3">
                                                    <table>
                                                        <thead>
                                                            <th height="50px" class="detail-label table-text-size ">รหัส
                                                                <br />No.
                                                            </th>
                                                            <th width="350px" class="detail-label table-text-size">
                                                                รายการสินค้า <br />Product</th>
                                                            <th width="50px" class="detail-label table-text-size">
                                                                จำนวน<br />amount</th>
                                                            <th width="150px" class="detail-label table-text-size">
                                                                ราคาต่อหน่วย (บาท)<br />Unit price(baht)</th>
                                                            <th width="150px" class="detail-label table-text-size">
                                                                มูลค่าก่อนภาษี<br />Pre-tax amount (baht)</th>
                                                        </thead>

                                                        <tr v-for="(item, idx) in items" v-bind:key="idx">
                                                            <td>{{ item.code }}</td>
                                                            <td>
                                                                <div>{{ item.name }}</div>
                                                                <div>{{ item.description }}</div>
                                                            </td>
                                                            <td>{{ item.amount }}</td>
                                                            <td>{{ item.unitPrice }}</td>
                                                            <td>{{ item.amount * item.unitPrice }}</td>
                                                        </tr>
                                                    </table>
                                                </b-row>
                                                <b-row class="detail-container mx-3 mt-3">
                                                    <b-col>
                                                        <b-row>
                                                            <div class="remarks detail-label bg-gray">
                                                                หมายเหตุ / Remarks
                                                            </div>
                                                        </b-row>
                                                        <b-row>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                                                            obcaecati saepe, iure voluptates magni accusamus eius nostrum
                                                            aliquid cum ea. </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col cols="6">
                                                                <div class="list detail-label">
                                                                    ส่วนลด /Discount<br />
                                                                    ราคาสุทธิสินค้าที่เสียภาษี / Sub Total<br />
                                                                    ภาษีมูลค่าเพิ่ม / Vat<br />
                                                                    ราคารวมก่อนหัก ณ ที่จ่าย / Total<br />
                                                                    จำนวนเงินรวมทั้งสิ้น / Grand Total<br />
                                                                </div>
                                                            </b-col>
                                                            <b-col cols="6">
                                                                <div class="list">
                                                                    100<br />
                                                                    100<br />
                                                                    100<br />
                                                                    100<br />
                                                                    100<br />
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                </b-row>
                                            </section>
                                        </div>
                                    </b-col>
                                </b-row> -->
                                <footer>
                                    <div class="temp-2"></div>
                                    <div class="square-footer">

                                    </div>
                                </footer>
                            </section>
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
// import '@/assets/sass/apps/invoice-preview.scss';
// import '@/assets/sass/scrollspyNav.scss';
// import '../../assets/scss/style.scss';
import '../../assets/scss/stylePDF.scss';

import html2pdf from 'html2pdf.js';

export default {
    metaInfo: { title: 'Invoice Preview' },
    data() {
        return {
            selectedLang: null,
            reportHeight: '',
            items: [
                { name: 'item1', code: '0001', amount: 1, unitPrice: 200, preTaxAmount: 3000, description: 'abcdefg' },
                { name: 'item2', code: '0001', amount: 2, unitPrice: 200, preTaxAmount: 3000, description: 'abcdefg' },
                { name: 'item3', code: '0001', amount: 5, unitPrice: 200, preTaxAmount: 3000, description: 'คำอธิบายยาวๆๆๆๆๆๆๆๆๆๆๆๆๆๆหลายๆบรรทัดกดฟหกดฟหกดฟหกดหฟกดหกด' },
                { name: 'item3', code: '0001', amount: 5, unitPrice: 200, preTaxAmount: 3000, description: 'คำอธิบายยาวๆๆๆๆๆๆๆๆๆๆๆๆๆๆหลายๆบรรทัดกดฟหกดฟหกดฟหกดหฟกดหกด' },
                { name: 'item3', code: '0001', amount: 10, unitPrice: 200, preTaxAmount: 3000, description: 'คำอธิบายยาวๆๆๆๆๆๆๆๆๆๆๆๆๆๆหลายๆบรรทัดกดฟหกดฟหกดฟหกดหฟกดหกด' },
                { name: 'item3', code: '0001', amount: 10, unitPrice: 200, preTaxAmount: 3000, description: 'lorem20' }
            ],
            columns: []
        };
    },
    mounted() { },
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById('element-to-convert'), {
                margin: 0,
                padding: 0,
                filename: 'testQuotation.pdf',
                image: { type: 'png' },
                // pagebreak: { mode: ['avoid-all', 'css'], before: '.page-break' },
            });

        },
        editDocument() {
            this.$router.push('/incomes/quotation/create');
        }
    }
};
</script>

