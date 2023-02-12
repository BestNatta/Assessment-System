<template>
    <div>
        <b-row class="mt-3">
            <b-col class="text-center">
                <h5>ชื่อบริษัท</h5>
                <div>
                    <h4>{{ tasks.company_name }}</h4>
                </div>
            </b-col>
        </b-row>

        <!-- print PDF -->
        <!-- <button @click="exportToPDF">click me!</button> -->

        <div id="element-to-convert" class="container-result">
            <div class="container">
                <b-row class="mt-3">
                    <b-col>
                        <h5>บทสรุปผู้บริหาร</h5>
                    </b-col>
                </b-row>
                <b-row class="mt-4 row-title">
                    <b-col cols="1" class="border  text-center">
                        <p class="mt-4">ข้อ</p>
                    </b-col>
                    <b-col cols="6" class="border  text-center">
                        <p class="mt-4">ข้อเสนอแนะ</p>
                    </b-col>
                    <b-col class="border ">
                        <b-row>
                            <b-col class="text-center  border-bottom p-2">
                                <p>ระดับความสำคัญของผลกระทบ</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="py-2 text-center border-right th-height">
                                <p>สุง</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-moderate">
                                <p>ปานกลาง</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-low">
                                <p>ต่ำ</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-aic">
                                <p>AIC</p>
                            </b-col>
                            <b-col class="py-2 text-center bg-secondary">
                                <p>รวม</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">การควบคุมภายในระดับองค์กร (Entity-Level Controls : ELC)</b>
                    </b-col>
                </b-row>
                <b-row class="border p-2 sub-topic">
                    <b-col class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-1 icon="arrow-down-right-square-fill"></b-icon>
                        <p>สภาพแวดล้อมการควบคุม (Control Environment)</p>
                    </b-col>
                </b-row>
                <b-collapse id="collapse-1">
                    <!-- 1. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>1</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[0] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[0].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[0].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[0].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[0].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[0].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 2. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>2</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[1] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[1].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[1].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[1].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[1].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[1].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 3. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>3</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[2] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[2].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[2].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[2].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[2].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[2].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 4. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>4</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[3] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[3].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[3].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[3].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[3].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[3].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 5. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>5</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[4] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[4].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[4].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[4].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[4].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[4].total }}
                            </p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2 sub-topic">
                    <b-col class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-2 icon="arrow-down-right-square-fill"></b-icon>
                        <p>การประเมินความเสี่ยง (Risk Assessment)</p>
                    </b-col>
                </b-row>
                <b-collapse id="collapse-2">
                    <!-- 6. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>6</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[5] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[5].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[5].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[5].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[5].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[5].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 7. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>7</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[6] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[6].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[6].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[6].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[6].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[6].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 8. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>8</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[7] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[7].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[7].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[7].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[7].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[7].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 9. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>9</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[8] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[8].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[8].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[8].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[8].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[8].total }}
                            </p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2 sub-topic">
                    <b-col class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-3 icon="arrow-down-right-square-fill"></b-icon>
                        <p>การควบคุมการปฏิบัติงาน (Control Activities)</p>
                    </b-col>
                </b-row>
                <b-collapse id="collapse-3">
                    <!-- 10. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>10</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[9] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[9].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[9].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[9].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[9].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[9].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 11. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>11</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[10] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[10].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[10].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[10].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[10].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[10].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 12. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>12</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[11] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[11].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[11].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[11].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[11].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[11].total }}
                            </p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2 sub-topic">
                    <b-col class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-4 icon="arrow-down-right-square-fill"></b-icon>
                        <p>ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)</p>
                    </b-col>
                </b-row>
                <b-collapse id="collapse-4">
                    <!-- 13. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>13</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[12] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[12].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[12].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[12].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[12].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[12].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 14. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>14</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[13] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[13].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[13].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[13].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[13].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[13].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 15. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>15</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[14] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[14].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[14].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[14].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[14].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[14].total }}
                            </p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2 sub-topic">
                    <b-col class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-5 icon="arrow-down-right-square-fill"></b-icon>
                        <p>ระบบการติดตาม (Monitoring Activities) </p>
                    </b-col>
                </b-row>
                <b-collapse id="collapse-5">
                    <!-- 16. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>16</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[15] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[15].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[15].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[15].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[15].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[15].total }}
                            </p>
                        </b-col>
                    </b-row>
                    <!-- 17. -->
                    <b-row class="border p-2" v-if="tasks.form1">
                        <b-col cols="1" class="text-center">
                            <p>17</p>
                        </b-col>
                        <b-col cols="6">
                            <p>{{ this.titleArr[16] }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[16].height }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[16].moderate }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[16].low }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[16].aic }}
                            </p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>
                                {{ sum[16].total }}
                            </p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls : PLC)</b>
                    </b-col>
                </b-row>
                <!-- 18 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[17] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[17].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[17].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[17].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[17].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[17].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 19 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[18] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[18].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[18].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[18].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[18].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[18].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 20 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[19] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[19].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[19].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[19].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[19].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[19].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 21 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[20] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[20].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[20].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[20].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[20].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[20].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 22 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[21] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[21].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[21].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[21].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[21].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[21].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 23 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[22] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[22].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[22].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[22].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[22].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[22].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 24 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[23] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[23].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[23].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[23].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[23].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[23].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- 25 -->
                <b-row class="border p-2" v-if="tasks.form1">
                    <b-col cols="7 ">
                        <ul>
                            <li>
                                <p>{{ this.titleArr[24] }}</p>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[24].height }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[24].moderate }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[24].low }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[24].aic }}
                        </p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>
                            {{ sum[24].total }}
                        </p>
                    </b-col>
                </b-row>
                <!-- รวม -->
                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">{{ this.titleArr[25] }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalHeightPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalModeratePLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalLowPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalAicPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalPLC }}</b>
                    </b-col>
                </b-row>
                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">{{ this.titleArr[26] }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalHeightELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalModerateELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalLowELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalAicELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalELC }}</b>
                    </b-col>
                </b-row>
                <b-row class="border p-2 row-footer">
                    <b-col cols="7">
                        <b class="list-title">{{ this.titleArr[27] }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalHeight }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalModerate }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalLow }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalAic }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.total }}</b>
                    </b-col>
                </b-row>
            </div>
        </div>

        <b-row class="d-flex justify-content-center mt-3">
            <b-col class="text-right px-0" cols="9">
                <!-- export Excel -->
                <downloadexcel :data="sum" :fields="columns" worksheet="My Worksheet" name="Report.xls">
                    <b-button variant="primary" class="py-2 px-4">
                        <b-icon class="mr-2" icon="file-arrow-down-fill" aria-hidden="true"
                            animation="cylon-vertical"></b-icon>Export Excel
                    </b-button>
                </downloadexcel>
            </b-col>
            <b-col><button @click="this.export()">Print PDF</button></b-col>
        </b-row>

        <!-- <resultCircle /> -->
    </div>
</template>

<script>
// import resultCircle from '../components/ResultCircle.vue'

// import pdfMake from 'pdfmake'
import { api } from '../helpers/Helpers';
// import html2pdf from "html2pdf.js";
import downloadexcel from "vue-json-excel";


export default {
    name: "Show",
    components: {
        // resultCircle,
        downloadexcel
    },

    data() {
        return {
            tasks: {},

            // columns fields excel
            columns:
            {
                "รายละเอียด": "title",
                "สูง": "height",
                "ปานกลาง": "moderate",
                "ต่ำ": "low",
                "Aic": "aic",
                "รวม": "total",
            }
            ,
            sum: new Array(25),

            titleArr: [
                'องค์กรแสดงถึงความยึดมั่นในคุณค่าของความซื่อตรง (Integrity) และจริยธรรม',
                'คณะกรรมการมีความเป็นอิสระจากฝ่ายบริหาร และทำหน้าที่กำกับดูแล (Oversight)และพัฒนาการดำเนินการด้านการควบคุมภายใน',
                'ฝ่ายบริหารได้จัดให้มีโครงสร้างสายการรายงานการกำหนดอำนาจในการสั่งการและความรับผิดชอบที่เหมาะสมเพื่อให้องค์กรบรรลุวัตถุประสงค์ ภายใต้การกำกับดูแล (oversight) ของคณะกรรมการ',
                'องค์กรแสดงถึงความมุ่งมั่นในการจูงใจ พัฒนาและรักษาบุคลากรที่มีความรู้ความสามารถ',
                'องค์กรกำหนดให้บุคลากรมีหน้าที่และความรับผิดชอบในการควบคุมภายในเพื่อให้บรรลุตามวัตถุประสงค์ขององค์กร',
                'องค์กรกำหนดวัตถุประสงค์ไว้อย่างชัดเจนเพียงพอ เพื่อให้สามารถระบุและประเมินความเสี่ยงต่างๆ ที่เกี่ยวข้องกับการบรรลุวัตถุประสงค์ขององค์กร',
                'องค์กรระบุและวิเคราะห์ความเสี่ยงทุกประเภทที่อาจกระทบต่อการบรรลุวัตถุประสงค์ไว้อย่างครอบคลุมทั่วทั้งองค์กร',
                'องค์กรได้พิจารณาถึงโอกาสที่จะเกิดการทุจริตในการประเมินความเสี่ยงที่จะบรรลุวัตถุประสงค์ขององค์กร',
                'องค์กรสามารถระบุและประเมินความเปลี่ยนแปลงที่อาจมีผลกระทบต่อระบบการควบคุมภายใน',
                'องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กรให้อยู่ในระดับที่ยอมรับได้',
                'องค์กรเลือกและพัฒนากิจกรรมการควบคุมทั่วไปด้วยระบบเทคโนโลยี เพื่อช่วยสนับสนุนการบรรลุวัตถุประสงค์',
                'องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้',
                'องค์กรข้อมูลที่เกี่ยวข้องและมีคุณภาพเพื่อสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่กำหนดไว้',
                'องค์กรสื่อสารข้อมูลภายในองค์กรซึ่งรวมถึงวัตถุประสงค์และความรับผิดชอบต่อการควบคุมภายในที่จำเป็นต่อการสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่วางไว้',
                'องค์กรได้สื่อสารกับหน่วยงานภายนอก เกี่ยวกับประเด็นที่อาจมีผลกระทบต่อการควบคุมภายใน',
                'องค์กรติดตามและประเมินผลการควบคุมภายใน เพื่อให้มั่นใจได้ว่าการควบคุมภายในยังดำเนินไปอย่างครบถ้วนเหมาะสม',
                'องค์กรประเมินและสื่อสารข้อบกพร่องของการควบคุมภายในอย่างทันเวลาต่อบุคคลที่รับผิดชอบ ซึ่งรวมถึงผู้บริหารระดับสูงและคณะกรรมการตามความเหมาะสม',
                'กระบวนการขายและรับชำระเงิน',
                'กระบวนการจัดซื้อจัดจ้างและการจ่ายชำระเงิน',
                'กระบวนการบริหารการผลิต',
                'กระบวนการบริหารสินค้าคงคลัง',
                'กระบวนการบริหารสินทรัพย์ถาวร',
                'กระบวนการบริหารทรัพยากรบุคคล',
                'กระบวนการบริหารด้านบัญชีและการเงิน',
                'กระบวนการควบคุมทั่วไปด้านระบบเทคโนโลยีสารสนเทศ (IT General Control)',

                'รวม การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)',
                'รวม การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)',
                'รวม',

            ],

            // ผลรวมของ PLC
            totalHeightPLC: '',
            totalModeratePLC: '',
            totalLowPLC: '',
            totalAicPLC: '',
            totalPLC: '',

            // ผลรวมของ ELC
            totalHeightELC: '',
            totalModerateELC: '',
            totalLowELC: '',
            totalAicELC: '',
            totalELC: '',

            // ผลรวมทั้งหมด
            totalHeight: '',
            totalModerate: '',
            totalLow: '',
            totalAic: '',
            total: '',

        }
    },

    created() {
    },

    async mounted() {
        this.tasks = await api.gettask(this.$route.params.id);
        this.calForm();
        this.export();
    },

    updated() {
    },

    methods: {
        // exportToPDF() {
        //     html2pdf(document.getElementById("element-to-convert"), {
        //         margin: 1,
        //         filename: "i-was-html.pdf",
        //     });
        // },

        calForm() {

            let entries = Object.fromEntries(
                Object.entries(this.tasks).filter(([key]) => key.startsWith("form"))
            )

            // console.log(entries);

            Object.entries(entries).forEach((formValue, formIndex) => {
                // console.log(`FormValue = ${formValue} :: FormIndex = ${formIndex}`);
                let sumHeight = 0;
                let sumModerate = 0;
                let sumLow = 0;
                let sumAic = 0;
                Object.entries(formValue[1]).forEach((formNumberValue) => {
                    // console.log(`FormValue = ${formValue[1]} :: FormNumberValue = ${formNumberValue}`);
                    sumHeight = sumHeight + formNumberValue[1].height;
                    // console.log(JSON.stringify(sumHeight));
                    sumModerate = sumModerate + formNumberValue[1].moderate;
                    sumLow = sumLow + formNumberValue[1].low;
                    sumAic = sumAic + formNumberValue[1].aic;
                });

                this.sum[formIndex] = {
                    // index: formIndex + 1,
                    title: this.titleArr[formIndex],
                    height: sumHeight,
                    moderate: sumModerate,
                    low: sumLow,
                    aic: sumAic,
                    total: (sumHeight + sumModerate + sumLow + sumAic)
                };
            });

            // นำค่าแต่ละส่วนมาบวกกัน 1-17 (PLC)
            let sumHeightPLC = 0;
            let sumModeratePLC = 0;
            let sumLowPLC = 0;
            let sumAicPLC = 0;
            let sumPLC = this.sum.slice(0, 17);
            sumPLC.forEach((obj) => {
                sumHeightPLC = sumHeightPLC + obj.height;
                sumModeratePLC = sumModeratePLC + obj.moderate;
                sumLowPLC = sumLowPLC + obj.low;
                sumAicPLC = sumAicPLC + obj.aic;
                this.totalPLC = sumHeightPLC + sumModeratePLC + sumLowPLC + sumAicPLC
            });

            this.totalHeightPLC = sumHeightPLC;
            this.totalModeratePLC = sumModeratePLC;
            this.totalLowPLC = sumLowPLC;
            this.totalAicPLC = sumAicPLC;

            // นำค่าแต่ละส่วนมาบวกกัน 18-25 (ELC)
            let sumHeightELC = 0;
            let sumModerateELC = 0;
            let sumLowELC = 0;
            let sumAicELC = 0;
            let sumELC = this.sum.slice(17, 25);
            sumELC.forEach((obj) => {
                sumHeightELC = sumHeightELC + obj.height;
                sumModerateELC = sumModerateELC + obj.moderate;
                sumLowELC = sumLowELC + obj.low;
                sumAicELC = sumAicELC + obj.aic;
                this.totalELC = sumHeightELC + sumModerateELC + sumLowELC + sumAicELC;

            });

            this.totalHeightELC = sumHeightELC;
            this.totalModerateELC = sumModerateELC;
            this.totalLowELC = sumLowELC;
            this.totalAicELC = sumAicELC;

            // ผลรวมทั้งหมด
            this.totalHeight = this.totalHeightPLC + this.totalHeightELC;
            this.totalModerate = this.totalModeratePLC + this.totalModerateELC;
            this.totalLow = this.totalLowPLC + this.totalLowELC;
            this.totalAic = this.totalAicPLC + this.totalHeightELC;
            this.total = this.totalPLC + this.totalELC;

            // เว้น 1 บรรทัด ใน excel
            this.sum[this.sum.length + 1] = {
                title: "",
                height: "",
                moderate: "",
                low: "",
                aic: "",
                total: ""
            };


            this.sum[this.sum.length + 2] = {
                title: this.titleArr[25],
                height: this.totalHeightPLC,
                moderate: this.totalModeratePLC,
                low: this.totalLowPLC,
                aic: this.totalAicPLC,
                total: this.totalPLC
            };

            this.sum[this.sum.length + 3] = {
                title: this.titleArr[26],
                height: this.totalHeightELC,
                moderate: this.totalModerateELC,
                low: this.totalLowELC,
                aic: this.totalAicELC,
                total: this.totalELC
            };

            this.sum[this.sum.length + 4] = {
                title: this.titleArr[27],
                height: this.totalHeight,
                moderate: this.totalModerate,
                low: this.totalLow,
                aic: this.totalAic,
                total: this.total
            };

        },

        // Export PDF

        // export() {
        //     const docDefinition = {
        //         content: [
        //             'English',
        //             'ไทย'
        //         ]
        //     }
        //     pdfMake.fonts = {
        //         // download default Roboto font from cdnjs.com
        //         Roboto: {
        //             normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        //             bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        //             italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        //             bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        //         }
        //     }
        //     pdfMake.createPdf(docDefinition).open({}, window)
        // }
    }
}
</script>