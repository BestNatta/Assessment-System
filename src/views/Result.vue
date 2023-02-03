<template>
    <div>

        <b-row class="mt-5">
            <b-col class="text-center">
                <h5>ชื่อบริษัท</h5>
                <div>
                    <h4>{{ tasks.company_name }}</h4>
                </div>
            </b-col>
        </b-row>

        <!-- print PDF -->
        <button @click="exportToPDF">click me!</button>

        <!-- export Excel -->
        <downloadexcel class="btn btn-default" :data="sum" worksheet="My Worksheet" name="Report.xls">
            <button>Export Excel</button>
        </downloadexcel>

        <div id="element-to-convert" class="container-result">
            <div class="container">
                <b-row class="mt-5">
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
                            <p>องค์กรแสดงถึงความยึดมั่นในคุณค่าของความซื่อตรง (Integrity) และจริยธรรม</p>
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
                            <p>คณะกรรมการมีความเป็นอิสระจากฝ่ายบริหาร และทำหน้าที่กำกับดูแล (Oversight)
                                และพัฒนาการดำเนินการด้านการควบคุมภายใน</p>
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
                            <p>ฝ่ายบริหารได้จัดให้มีโครงสร้างสายการรายงาน
                                การกำหนดอำนาจในการสั่งการและความรับผิดชอบที่เหมาะสมเพื่อให้องค์กรบรรลุวัตถุประสงค์
                                ภายใต้การกำกับดูแล (oversight) ของคณะกรรมการ</p>
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
                            <p>องค์กรแสดงถึงความมุ่งมั่นในการจูงใจ พัฒนาและรักษาบุคลากรที่มีความรู้ความสามารถ</p>
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
                            <p>องค์กรกำหนดให้บุคลากรมีหน้าที่และความรับผิดชอบในการควบคุมภายใน
                                เพื่อให้บรรลุตามวัตถุประสงค์ขององค์กร</p>
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
                            <p>องค์กรกำหนดวัตถุประสงค์ไว้อย่างชัดเจนเพียงพอ เพื่อให้สามารถระบุและประเมินความเสี่ยงต่าง ๆ
                                ที่เกี่ยวข้องกับการบรรลุวัตถุประสงค์ขององค์กร</p>
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
                            <p>องค์กรระบุและวิเคราะห์ความเสี่ยงทุกประเภทที่อาจกระทบต่อการบรรลุวัตถุประสงค์ไว้อย่างครอบคลุมทั่วทั้งองค์กร
                            </p>
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
                            <p>องค์กรได้พิจารณาถึงโอกาสที่จะเกิดการทุจริต
                                ในการประเมินความเสี่ยงที่จะบรรลุวัตถุประสงค์ขององค์กร</p>
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
                            <p>องค์กรสามารถระบุและประเมินความเปลี่ยนแปลงที่อาจมีผลกระทบต่อระบบการควบคุมภายใน</p>
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
                            <p>องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กร
                                ให้อยู่ในระดับที่ยอมรับได้</p>
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
                            <p>องค์กรเลือกและพัฒนากิจกรรมการควบคุมทั่วไปด้วยระบบเทคโนโลยี
                                เพื่อช่วยสนับสนุนการบรรลุวัตถุประสงค์</p>
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
                            <p>องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย
                                ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ
                                เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</p>
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
                            <p>องค์กรข้อมูลที่เกี่ยวข้องและมีคุณภาพ
                                เพื่อสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่กำหนดไว้</p>
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
                            <p>องค์กรสื่อสารข้อมูลภายในองค์กร
                                ซึ่งรวมถึงวัตถุประสงค์และความรับผิดชอบต่อการควบคุมภายในที่จำเป็นต่อการสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่วางไว้
                            </p>
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
                            <p>องค์กรได้สื่อสารกับหน่วยงานภายนอก เกี่ยวกับประเด็นที่อาจมีผลกระทบต่อการควบคุมภายใน</p>
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
                            <p>องค์กรติดตามและประเมินผลการควบคุมภายใน
                                เพื่อให้มั่นใจได้ว่าการควบคุมภายในยังดำเนินไปอย่างครบถ้วน เหมาะสม</p>
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
                            <p>องค์กรประเมินและสื่อสารข้อบกพร่องของการควบคุมภายในอย่างทันเวลาต่อบุคคลที่รับผิดชอบ
                                ซึ่งรวมถึงผู้บริหารระดับสูงและคณะกรรมการตามความเหมาะสม</p>
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
                                <p>กระบวนการขายและรับชำระเงิน</p>
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
                                <p>กระบวนการจัดซื้อจัดจ้างและการจ่ายชำระเงิน</p>
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
                                <p>กระบวนการบริหารการผลิต</p>
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
                                <p>กระบวนการบริหารสินค้าคงคลัง</p>
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
                                <p>กระบวนการบริหารสินทรัพย์ถาวร</p>
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
                                <p>กระบวนการบริหารทรัพยากรบุคคล</p>
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
                                <p>กระบวนการบริหารด้านบัญชีและการเงิน</p>
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
                    <b-col cols="7">
                        <ul>
                            <li>
                                <p>กระบวนการควบคุมทั่วไปด้านระบบเทคโนโลยีสารสนเทศ (IT General Control)</p>
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
                        <b class="list-title">รวม การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultHeightPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultModeratePLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultLowPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultAicPLC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalPLC = resultHeightPLC + resultModeratePLC + resultLowPLC + resultAicPLC }}</b>
                    </b-col>
                </b-row>
                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">รวม การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultHeightELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultModerateELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultLowELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultAicELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ this.totalELC = resultHeightELC + resultModerateELC + resultLowELC + resultAicELC }}</b>
                    </b-col>
                </b-row>
                <b-row class="border p-2 row-footer">
                    <b-col cols="7">
                        <b class="list-title">รวม</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultHeightPLC + resultHeightELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultModeratePLC + resultModerateELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultLowPLC + resultLowELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ resultAicPLC + resultAicELC }}</b>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <b>{{ totalPLC + totalELC }}</b>
                    </b-col>
                </b-row>
            </div>
        </div>
        <resultCircle />
    </div>
</template>

<script>
import resultCircle from '../components/ResultCircle.vue'
import { api } from '../helpers/Helpers';
import html2pdf from "html2pdf.js";
import downloadexcel from "vue-json-excel";


export default {
    name: "Show",
    components: {
        resultCircle,
        downloadexcel
    },

    data() {
        return {
            tasks: {},
            sum1: { height: '', moderate: '', low: '', aic: '' },
            sum2: { height: '', moderate: '', low: '', aic: '' },
            sum3: { height: '', moderate: '', low: '', aic: '' },
            sum4: { height: '', moderate: '', low: '', aic: '' },
            sum5: { height: '', moderate: '', low: '', aic: '' },
            sum6: { height: '', moderate: '', low: '', aic: '' },
            sum7: { height: '', moderate: '', low: '', aic: '' },
            sum8: { height: '', moderate: '', low: '', aic: '' },
            sum9: { height: '', moderate: '', low: '', aic: '' },
            sum10: { height: '', moderate: '', low: '', aic: '' },
            sum11: { height: '', moderate: '', low: '', aic: '' },
            sum12: { height: '', moderate: '', low: '', aic: '' },
            sum13: { height: '', moderate: '', low: '', aic: '' },
            sum14: { height: '', moderate: '', low: '', aic: '' },
            sum15: { height: '', moderate: '', low: '', aic: '' },
            sum16: { height: '', moderate: '', low: '', aic: '' },
            sum17: { height: '', moderate: '', low: '', aic: '' },
            sum18: { height: '', moderate: '', low: '', aic: '' },
            sum19: { height: '', moderate: '', low: '', aic: '' },
            sum20: { height: '', moderate: '', low: '', aic: '' },
            sum21: { height: '', moderate: '', low: '', aic: '' },
            sum22: { height: '', moderate: '', low: '', aic: '' },
            sum23: { height: '', moderate: '', low: '', aic: '' },
            sum24: { height: '', moderate: '', low: '', aic: '' },
            sum25: { height: '', moderate: '', low: '', aic: '' },

            sum: new Array(25),

            bestZa: [],

            totalHeightPLC: '',
            totalModeratePLC: '',
            totalLowPLC: '',
            totalAicPLC: '',

            totalPLC: '',
            totalELC: ''

        }
    },

    created() {
    },

    async mounted() {
        this.tasks = await api.gettask(this.$route.params.id);
        // this.calForm1();
        this.calForm();

    },

    updated() {
    },

    methods: {
        exportToPDF() {
            html2pdf(document.getElementById("element-to-convert"), {
                margin: 1,
                filename: "i-was-html.pdf",
            });
        },
        addData() {
            this.bestza.append({ id: 1, height: this.sum1.height, moderate: this.sum1.moderate, low: this.sum1.low, aic: this.sum1.aic, total: this.totalHeightPLC });
            this.bestza.append({ id: 2, height: this.sum2.height, moderate: this.sum2.moderate, low: this.sum2.low, aic: this.sum2.aic, total: this.totalHeightPLC });
            // console.log(this.bestza)
        },
        calForm() {
            // console.log(this.tasks)
            let entries = Object.fromEntries(
                Object.entries(this.tasks).filter(([key]) => key.startsWith("form"))
            )
            // console.log(entries)

            Object.entries(entries).forEach((formValue, formIndex) => {
                // console.log(formValue[1]);
                let sumHeight = 0;
                let sumModerate = 0;
                let sumLow = 0;
                let sumAic = 0;
                Object.entries(formValue[1]).forEach((formNumberValue) => {
                    sumHeight = sumHeight + formNumberValue[1].height;
                    sumModerate = sumModerate + formNumberValue[1].moderate;
                    sumLow = sumLow + formNumberValue[1].low;
                    sumAic = sumAic + formNumberValue[1].aic;
                });
                this.sum[formIndex] = {
                    height: sumHeight,
                    moderate: sumModerate,
                    low: sumLow,
                    aic: sumAic,
                    total: (sumHeight + sumModerate + sumLow + sumAic)
                };
            });

            // this.sum[0]={ height: '', moderate: '', low: '', aic: '' }
            console.log(this.sum)


        },

        // getSum1() {
        //     for(const form in this.tasks.form1){
        //         this.sum.height += this.tasks.form1[form].height
        //         this.sum.moderate += this.tasks.form1[form].moderate
        //         this.sum.low += this.tasks.form1[form].low
        //         this.sum.aic += this.tasks.form1[form].aic
        //     }
        //     console.log(`Height = ${this.sum.height}`)
        //     console.log(`Moderate = ${this.sum.moderate}`)
        //     console.log(`Low = ${this.sum.low}`)
        //     console.log(`AIC = ${this.sum.aic}`)
        // }
        calForm1() {
            const sum = {};
            let entries = Object.fromEntries(
                Object.entries(this.tasks).filter(([key]) => key === "form1")
            )
            console.log(entries)
            for (let i = 0; i < this.tasks.form1.length; i++) {
                for (const key in this.tasks.form1[i]) {
                    if (key !== "id") {
                        sum[key] = (sum[key] || 0) + this.tasks.form1[i][key];
                    }
                }
            }
            // console.log(sum)
        }
    },

    computed: {
        resultHeightPLC() {
            return this.sum18.height + this.sum19.height + this.sum20.height + this.sum21.height +
                this.sum22.height + this.sum23.height + this.sum24.height + this.sum25.height

        },
        resultModeratePLC() {
            return this.sum18.moderate + this.sum19.moderate + this.sum20.moderate + this.sum21.moderate +
                this.sum22.moderate + this.sum23.moderate + this.sum24.moderate + this.sum25.moderate

        },
        resultLowPLC() {
            return this.sum18.low + this.sum19.low + this.sum20.low + this.sum21.low +
                this.sum22.low + this.sum23.low + this.sum24.low + this.sum25.low

        },
        resultAicPLC() {
            return this.sum18.aic + this.sum19.aic + this.sum20.aic + this.sum21.aic +
                this.sum22.aic + this.sum23.aic + this.sum24.aic + this.sum25.aic
        },

        resultHeightELC() {
            return this.sum1.height + this.sum2.height + this.sum3.height + this.sum4.height +
                this.sum5.height + this.sum6.height + this.sum7.height + this.sum8.height +
                this.sum9.height + this.sum10.height + this.sum11.height + this.sum12.height +
                this.sum13.height + this.sum14.height + this.sum15.height + this.sum16.height + this.sum17.height
        },

        resultModerateELC() {
            return this.sum1.moderate + this.sum2.moderate + this.sum3.moderate + this.sum4.moderate +
                this.sum5.moderate + this.sum6.moderate + this.sum7.moderate + this.sum8.moderate +
                this.sum9.moderate + this.sum10.moderate + this.sum11.moderate + this.sum12.moderate +
                this.sum13.moderate + this.sum14.moderate + this.sum15.moderate + this.sum16.moderate + this.sum17.moderate
        },

        resultLowELC() {
            return this.sum1.low + this.sum2.low + this.sum3.low + this.sum4.low +
                this.sum5.low + this.sum6.low + this.sum7.low + this.sum8.low +
                this.sum9.low + this.sum10.low + this.sum11.low + this.sum12.low +
                this.sum13.low + this.sum14.low + this.sum15.low + this.sum16.low + this.sum17.low
        },

        resultAicELC() {
            return this.sum1.aic + this.sum2.aic + this.sum3.aic + this.sum4.aic +
                this.sum5.aic + this.sum6.aic + this.sum7.aic + this.sum8.aic +
                this.sum9.aic + this.sum10.aic + this.sum11.aic + this.sum12.aic +
                this.sum13.aic + this.sum14.aic + this.sum15.aic + this.sum16.aic + this.sum17.aic
        },
    },
}
</script>