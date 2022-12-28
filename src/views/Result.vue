<template>
    <div>
        <b-row class="mt-5" >
            <b-col class="text-center">
                <h5>ชื่อบริษัท</h5>
                <div v-for="task in 1" :key="task">
                    <h4>{{ tasks.company_name }}</h4>
                </div>
            </b-col>
        </b-row>
        <div class="container-result">
            <div class="container">
                <b-row class="mt-5">
                    <b-col>
                        <h5>บทสรุปผู้บริหาร</h5>
                    </b-col>
                </b-row>
                <b-row class="mt-4 row-title">
                    <b-col cols="1" class="border  text-center"><p class="mt-4">ข้อ</p></b-col>
                    <b-col cols="6" class="border  text-center"><p class="mt-4">ข้อเสนอแนะ</p></b-col>
                    <b-col class="border ">
                        <b-row>
                            <b-col class="text-center  border-bottom p-2">
                                <p>ระดับความสำคัญของผลกระทบ</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="py-2 text-center border-right th-height"><p>สุง</p></b-col>
                            <b-col class="py-2 text-center border-right th-moderate"><p>ปานกลาง</p></b-col>
                            <b-col class="py-2 text-center border-right th-low"><p>ต่ำ</p></b-col>
                            <b-col class="py-2 text-center border-right th-aic"><p>AIC</p></b-col>
                            <b-col class="py-2 text-center bg-secondary"><p>รวม</p></b-col>
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
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>1</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรแสดงถึงความยึดมั่นในคุณค่าของความซื่อตรง (Integrity) และจริยธรรม</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum1.height = tasks.form1.form1_1.height + tasks.form1.form1_2.height + tasks.form1.form1_3.height + tasks.form1.form1_4.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum1.moderate = tasks.form1.form1_1.moderate + tasks.form1.form1_2.moderate + tasks.form1.form1_3.moderate + tasks.form1.form1_4.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum1.low = tasks.form1.form1_1.low + tasks.form1.form1_2.low + tasks.form1.form1_3.low + tasks.form1.form1_4.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum1.aic = tasks.form1.form1_1.aic + tasks.form1.form1_2.aic + tasks.form1.form1_3.aic + tasks.form1.form1_4.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum1.height + sum1.moderate + sum1.low + sum1.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 2. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>2</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>คณะกรรมการมีความเป็นอิสระจากฝ่ายบริหาร และทำหน้าที่กำกับดูแล (Oversight) และพัฒนาการดำเนินการด้านการควบคุมภายใน</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum2.height =  tasks.form2.form2_1.height + tasks.form2.form2_2.height + tasks.form2.form2_3.height + tasks.form2.form2_4.height + tasks.form2.form2_5.height + tasks.form2.form2_6.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum2.moderate =  tasks.form2.form2_1.moderate + tasks.form2.form2_2.moderate + tasks.form2.form2_3.moderate + tasks.form2.form2_4.moderate + tasks.form2.form2_5.moderate + tasks.form2.form2_6.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum2.low =  tasks.form2.form2_1.low + tasks.form2.form2_2.low + tasks.form2.form2_3.low + tasks.form2.form2_4.low + tasks.form2.form2_5.low + tasks.form2.form2_6.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum2.aic =  tasks.form2.form2_1.aic + tasks.form2.form2_2.aic + tasks.form2.form2_3.aic + tasks.form2.form2_4.aic + tasks.form2.form2_5.aic + tasks.form2.form2_6.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum2.height + sum2.moderate + sum2.low + sum2.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 3. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>3</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>ฝ่ายบริหารได้จัดให้มีโครงสร้างสายการรายงาน การกำหนดอำนาจในการสั่งการและความรับผิดชอบที่เหมาะสมเพื่อให้องค์กรบรรลุวัตถุประสงค์ ภายใต้การกำกับดูแล (oversight) ของคณะกรรมการ</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum3.height = tasks.form3.form3_1.height + tasks.form3.form3_2.height + tasks.form3.form3_3.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum3.moderate = tasks.form3.form3_1.moderate + tasks.form3.form3_2.moderate + tasks.form3.form3_3.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum3.low = tasks.form3.form3_1.low + tasks.form3.form3_2.low + tasks.form3.form3_3.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum3.aic = tasks.form3.form3_1.aic + tasks.form3.form3_2.aic + tasks.form3.form3_3.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum3.height + sum3.moderate + sum3.low + sum3.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 4. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>4</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรแสดงถึงความมุ่งมั่นในการจูงใจ พัฒนาและรักษาบุคลากรที่มีความรู้ความสามารถ</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum4.height = tasks.form4.form4_1.height + tasks.form4.form4_2.height + tasks.form4.form4_3.height + tasks.form4.form4_4.height + tasks.form4.form4_5.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum4.moderate = tasks.form4.form4_1.moderate + tasks.form4.form4_2.moderate + tasks.form4.form4_3.moderate + tasks.form4.form4_4.moderate + tasks.form4.form4_5.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum4.low = tasks.form4.form4_1.low + tasks.form4.form4_2.low + tasks.form4.form4_3.low + tasks.form4.form4_4.low + tasks.form4.form4_5.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum4.aic = tasks.form4.form4_1.aic + tasks.form4.form4_2.aic + tasks.form4.form4_3.aic + tasks.form4.form4_4.aic + tasks.form4.form4_5.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum4.height + sum4.moderate + sum4.low + sum4.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 5. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>5</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรกำหนดให้บุคลากรมีหน้าที่และความรับผิดชอบในการควบคุมภายใน เพื่อให้บรรลุตามวัตถุประสงค์ขององค์กร</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum5.height = tasks.form5.form5_1.height + tasks.form5.form5_2.height + tasks.form5.form5_3.height + tasks.form5.form5_4.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum5.moderate = tasks.form5.form5_1.moderate + tasks.form5.form5_2.moderate + tasks.form5.form5_3.moderate + tasks.form5.form5_4.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum5.low = tasks.form5.form5_1.low + tasks.form5.form5_2.low + tasks.form5.form5_3.low + tasks.form5.form5_4.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum5.aic = tasks.form5.form5_1.aic + tasks.form5.form5_2.aic + tasks.form5.form5_3.aic + tasks.form5.form5_4.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum5.height + sum5.moderate + sum5.low + sum5.aic }}</p>
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
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>6</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรกำหนดวัตถุประสงค์ไว้อย่างชัดเจนเพียงพอ เพื่อให้สามารถระบุและประเมินความเสี่ยงต่าง ๆ ที่เกี่ยวข้องกับการบรรลุวัตถุประสงค์ขององค์กร</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum6.height = tasks.form6.form6_1.height + tasks.form6.form6_2.height + tasks.form6.form6_3.height + tasks.form6.form6_4.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum6.moderate = tasks.form6.form6_1.moderate + tasks.form6.form6_2.moderate + tasks.form6.form6_3.moderate + tasks.form6.form6_4.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum6.low = tasks.form6.form6_1.low + tasks.form6.form6_2.low + tasks.form6.form6_3.low + tasks.form6.form6_4.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum6.aic = tasks.form6.form6_1.aic + tasks.form6.form6_2.aic + tasks.form6.form6_3.aic + tasks.form6.form6_4.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum6.height + sum6.moderate + sum6.low + sum6.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 7. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>7</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรระบุและวิเคราะห์ความเสี่ยงทุกประเภทที่อาจกระทบต่อการบรรลุวัตถุประสงค์ไว้อย่างครอบคลุมทั่วทั้งองค์กร</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum7.height = tasks.form7.form7_1.height + tasks.form7.form7_2.height + tasks.form7.form7_3.height + tasks.form7.form7_4.height + tasks.form7.form7_5.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum7.moderate = tasks.form7.form7_1.moderate + tasks.form7.form7_2.moderate + tasks.form7.form7_3.moderate + tasks.form7.form7_4.moderate + tasks.form7.form7_5.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum7.low = tasks.form7.form7_1.low + tasks.form7.form7_2.low + tasks.form7.form7_3.low + tasks.form7.form7_4.low + tasks.form7.form7_5.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum7.aic = tasks.form7.form7_1.aic + tasks.form7.form7_2.aic + tasks.form7.form7_3.aic + tasks.form7.form7_4.aic + tasks.form7.form7_5.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum7.height + sum7.moderate + sum7.low + sum7.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 8. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>8</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรได้พิจารณาถึงโอกาสที่จะเกิดการทุจริต ในการประเมินความเสี่ยงที่จะบรรลุวัตถุประสงค์ขององค์กร</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum8.height = tasks.form8.form8_1.height + tasks.form8.form8_2.height + tasks.form8.form8_3.height + tasks.form8.form8_4.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum8.moderate = tasks.form8.form8_1.moderate + tasks.form8.form8_2.moderate + tasks.form8.form8_3.moderate + tasks.form8.form8_4.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum8.low = tasks.form8.form8_1.low + tasks.form8.form8_2.low + tasks.form8.form8_3.low + tasks.form8.form8_4.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum8.aic = tasks.form8.form8_1.aic + tasks.form8.form8_2.aic + tasks.form8.form8_3.aic + tasks.form8.form8_4.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum8.height + sum8.moderate + sum8.low + sum8.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 9. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>9</p>
                        </b-col>
                        <b-col cols="6">
                            <p>องค์กรสามารถระบุและประเมินความเปลี่ยนแปลงที่อาจมีผลกระทบต่อระบบการควบคุมภายใน</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum9.height = tasks.form9.form9_1.height + tasks.form9.form9_2.height + tasks.form9.form9_3.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum9.moderate = tasks.form9.form9_1.moderate + tasks.form9.form9_2.moderate + tasks.form9.form9_3.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum9.low = tasks.form9.form9_1.low + tasks.form9.form9_2.low + tasks.form9.form9_3.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum9.aic = tasks.form9.form9_1.aic + tasks.form9.form9_2.aic + tasks.form9.form9_3.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum9.height + sum9.moderate + sum9.low + sum9.aic }}</p>
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
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>10</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กร ให้อยู่ในระดับที่ยอมรับได้</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum10.height = tasks.form10.form10_1.height + tasks.form10.form10_2.height + tasks.form10.form10_3.height + tasks.form10.form10_4.height + tasks.form10.form10_5.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum10.moderate = tasks.form10.form10_1.moderate + tasks.form10.form10_2.moderate + tasks.form10.form10_3.moderate + tasks.form10.form10_4.moderate + tasks.form10.form10_5.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum10.low = tasks.form10.form10_1.low + tasks.form10.form10_2.low + tasks.form10.form10_3.low + tasks.form10.form10_4.low + tasks.form10.form10_5.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum10.aic = tasks.form10.form10_1.aic + tasks.form10.form10_2.aic + tasks.form10.form10_3.aic + tasks.form10.form10_4.aic + tasks.form10.form10_5.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum10.height + sum10.moderate + sum10.low + sum10.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 11. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>11</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรเลือกและพัฒนากิจกรรมการควบคุมทั่วไปด้วยระบบเทคโนโลยี เพื่อช่วยสนับสนุนการบรรลุวัตถุประสงค์</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum11.height = tasks.form11.form11_1.height + tasks.form11.form11_2.height + tasks.form11.form11_3.height + tasks.form11.form11_4.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum11.moderate = tasks.form11.form11_1.moderate + tasks.form11.form11_2.moderate + tasks.form11.form11_3.moderate + tasks.form11.form11_4.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum11.low = tasks.form11.form11_1.low + tasks.form11.form11_2.low + tasks.form11.form11_3.low + tasks.form11.form11_4.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum11.aic = tasks.form11.form11_1.aic + tasks.form11.form11_2.aic + tasks.form11.form11_3.aic + tasks.form11.form11_4.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum11.height + sum11.moderate + sum11.low + sum11.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 12. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>12</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum12.height = tasks.form12.form12_1.height + tasks.form12.form12_2.height + tasks.form12.form12_3.height + tasks.form12.form12_4.height + tasks.form12.form12_5.height + tasks.form12.form12_6.height + tasks.form12.form12_7.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum12.moderate = tasks.form12.form12_1.moderate + tasks.form12.form12_2.moderate + tasks.form12.form12_3.moderate + tasks.form12.form12_4.moderate + tasks.form12.form12_5.moderate + tasks.form12.form12_6.moderate + tasks.form12.form12_7.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum12.low = tasks.form12.form12_1.low + tasks.form12.form12_2.low + tasks.form12.form12_3.low + tasks.form12.form12_4.low + tasks.form12.form12_5.low + tasks.form12.form12_6.low + tasks.form12.form12_7.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum12.aic = tasks.form12.form12_1.aic + tasks.form12.form12_2.aic + tasks.form12.form12_3.aic + tasks.form12.form12_4.aic + tasks.form12.form12_5.aic + tasks.form12.form12_6.aic + tasks.form12.form12_7.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum12.height + sum12.moderate + sum12.low + sum12.aic }}</p>
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
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>13</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรข้อมูลที่เกี่ยวข้องและมีคุณภาพ เพื่อสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่กำหนดไว้</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum13.height = tasks.form13.form13_1.height + tasks.form13.form13_2.height + tasks.form13.form13_3.height + tasks.form13.form13_4.height + tasks.form13.form13_5.height + tasks.form13.form13_6.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum13.moderate = tasks.form13.form13_1.moderate + tasks.form13.form13_2.moderate + tasks.form13.form13_3.moderate + tasks.form13.form13_4.moderate + tasks.form13.form13_5.moderate + tasks.form13.form13_6.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum13.low = tasks.form13.form13_1.low + tasks.form13.form13_2.low + tasks.form13.form13_3.low + tasks.form13.form13_4.low + tasks.form13.form13_5.low + tasks.form13.form13_6.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum13.aic = tasks.form13.form13_1.aic + tasks.form13.form13_2.aic + tasks.form13.form13_3.aic + tasks.form13.form13_4.aic + tasks.form13.form13_5.aic + tasks.form13.form13_6.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum13.height + sum13.moderate + sum13.low + sum13.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 14. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>14</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรสื่อสารข้อมูลภายในองค์กร ซึ่งรวมถึงวัตถุประสงค์และความรับผิดชอบต่อการควบคุมภายในที่จำเป็นต่อการสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่วางไว้</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum14.height = tasks.form14.form14_1.height + tasks.form14.form14_2.height + tasks.form14.form14_3.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum14.moderate = tasks.form14.form14_1.moderate + tasks.form14.form14_2.moderate + tasks.form14.form14_3.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum14.low = tasks.form14.form14_1.low + tasks.form14.form14_2.low + tasks.form14.form14_3.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum14.aic = tasks.form14.form14_1.aic + tasks.form14.form14_2.aic + tasks.form14.form14_3.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum14.height + sum14.moderate + sum14.low + sum14.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 15. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>15</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรได้สื่อสารกับหน่วยงานภายนอก เกี่ยวกับประเด็นที่อาจมีผลกระทบต่อการควบคุมภายใน</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum15.height = tasks.form15.form15_1.height + tasks.form15.form15_2.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum15.moderate = tasks.form15.form15_1.moderate + tasks.form15.form15_2.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum15.low = tasks.form15.form15_1.low + tasks.form15.form15_2.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum15.aic = tasks.form15.form15_1.aic + tasks.form15.form15_2.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum15.height + sum15.moderate + sum15.low + sum15.aic }}</p>
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
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>16</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรติดตามและประเมินผลการควบคุมภายใน เพื่อให้มั่นใจได้ว่าการควบคุมภายในยังดำเนินไปอย่างครบถ้วน เหมาะสม</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum16.height = tasks.form16.form16_1.height + tasks.form16.form16_2.height + tasks.form16.form16_3.height + tasks.form16.form16_4.height + tasks.form16.form16_5.height + tasks.form16.form16_6.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum16.moderate = tasks.form16.form16_1.moderate + tasks.form16.form16_2.moderate + tasks.form16.form16_3.moderate + tasks.form16.form16_4.moderate + tasks.form16.form16_5.moderate + tasks.form16.form16_6.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum16.low = tasks.form16.form16_1.low + tasks.form16.form16_2.low + tasks.form16.form16_3.low + tasks.form16.form16_4.low + tasks.form16.form16_5.low + tasks.form16.form16_6.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum16.aic = tasks.form16.form16_1.aic + tasks.form16.form16_2.aic + tasks.form16.form16_3.aic + tasks.form16.form16_4.aic + tasks.form16.form16_5.aic + tasks.form16.form16_6.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum16.height + sum16.moderate + sum16.low + sum16.aic }}</p>
                        </b-col>
                    </b-row>
                    <!-- 17. -->
                    <b-row class="border p-2">
                        <b-col cols="1" class="text-center">
                            <p>17</p>
                        </b-col>
                        <b-col cols="6" v-for="task in 1" :key="task">
                            <p>องค์กรประเมินและสื่อสารข้อบกพร่องของการควบคุมภายในอย่างทันเวลาต่อบุคคลที่รับผิดชอบ ซึ่งรวมถึงผู้บริหารระดับสูงและคณะกรรมการตามความเหมาะสม</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum17.height = tasks.form17.form17_1.height + tasks.form17.form17_2.height }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum17.moderate = tasks.form17.form17_1.moderate + tasks.form17.form17_2.moderate }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum17.low = tasks.form17.form17_1.low + tasks.form17.form17_2.low }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum17.aic = tasks.form17.form17_1.aic + tasks.form17.form17_2.aic }}</p>
                        </b-col>
                        <b-col cols="1" class="text-center">
                            <p>{{ sum17.height + sum17.moderate + sum17.low + sum17.aic }}</p>
                        </b-col>
                    </b-row>
                </b-collapse>
                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls : PLC)</b>
                    </b-col>
                </b-row>
                <!-- 18 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการขายและรับชำระเงิน</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum18.height = tasks.form18.form18_1.height + tasks.form18.form18_2.height + tasks.form18.form18_3.height + tasks.form18.form18_4.height + tasks.form18.form18_5.height + tasks.form18.form18_6.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum18.moderate = tasks.form18.form18_1.moderate + tasks.form18.form18_2.moderate + tasks.form18.form18_3.moderate + tasks.form18.form18_4.moderate + tasks.form18.form18_5.moderate + tasks.form18.form18_6.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum18.low = tasks.form18.form18_1.low + tasks.form18.form18_2.low + tasks.form18.form18_3.low + tasks.form18.form18_4.low + tasks.form18.form18_5.low + tasks.form18.form18_6.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum18.aic = tasks.form18.form18_1.aic + tasks.form18.form18_2.aic + tasks.form18.form18_3.aic + tasks.form18.form18_4.aic + tasks.form18.form18_5.aic + tasks.form18.form18_6.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum18.height + sum18.moderate + sum18.low + sum18.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 19 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการจัดซื้อจัดจ้างและการจ่ายชำระเงิน</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum19.height = tasks.form19.form19_1.height + tasks.form19.form19_2.height + tasks.form19.form19_3.height + tasks.form19.form19_4.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum19.moderate = tasks.form19.form19_1.moderate + tasks.form19.form19_2.moderate + tasks.form19.form19_3.moderate + tasks.form19.form19_4.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum19.low = tasks.form19.form19_1.low + tasks.form19.form19_2.low + tasks.form19.form19_3.low + tasks.form19.form19_4.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum19.aic = tasks.form19.form19_1.aic + tasks.form19.form19_2.aic + tasks.form19.form19_3.aic + tasks.form19.form19_4.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum19.height + sum19.moderate + sum19.low + sum19.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 20 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการบริหารการผลิต</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum20.height = tasks.form20.form20_1.height + tasks.form20.form20_2.height + tasks.form20.form20_3.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum20.moderate = tasks.form20.form20_1.moderate + tasks.form20.form20_2.moderate + tasks.form20.form20_3.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum20.low = tasks.form20.form20_1.low + tasks.form20.form20_2.low + tasks.form20.form20_3.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum20.aic = tasks.form20.form20_1.aic + tasks.form20.form20_2.aic + tasks.form20.form20_3.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum20.height + sum20.moderate + sum20.low + sum20.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 21 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการบริหารสินค้าคงคลัง</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum21.height = tasks.form21.form21_1.height + tasks.form21.form21_2.height + tasks.form21.form21_3.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum21.moderate = tasks.form21.form21_1.moderate + tasks.form21.form21_2.moderate + tasks.form21.form21_3.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum21.low = tasks.form21.form21_1.low + tasks.form21.form21_2.low + tasks.form21.form21_3.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum21.aic = tasks.form21.form21_1.aic + tasks.form21.form21_2.aic + tasks.form21.form21_3.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum21.height + sum21.moderate + sum21.low + sum21.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 22 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task"> 
                        <ul>
                            <li><p>กระบวนการบริหารสินทรัพย์ถาวร</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum22.height = tasks.form22.form22_1.height + tasks.form22.form22_2.height + tasks.form22.form22_3.height + tasks.form22.form22_4.height + tasks.form22.form22_5.height + tasks.form22.form22_6.height + tasks.form22.form22_7.height + tasks.form22.form22_8.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum22.moderate = tasks.form22.form22_1.moderate + tasks.form22.form22_2.moderate + tasks.form22.form22_3.moderate + tasks.form22.form22_4.moderate + tasks.form22.form22_5.moderate + tasks.form22.form22_6.moderate + tasks.form22.form22_7.moderate + tasks.form22.form22_8.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum22.low = tasks.form22.form22_1.low + tasks.form22.form22_2.low + tasks.form22.form22_3.low + tasks.form22.form22_4.low + tasks.form22.form22_5.low + tasks.form22.form22_6.low + tasks.form22.form22_7.low + tasks.form22.form22_8.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum22.aic = tasks.form22.form22_1.aic + tasks.form22.form22_2.aic + tasks.form22.form22_3.aic + tasks.form22.form22_4.aic + tasks.form22.form22_5.aic + tasks.form22.form22_6.aic + tasks.form22.form22_7.aic + tasks.form22.form22_8.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum22.height + sum22.moderate + sum22.low + sum22.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 23 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการบริหารทรัพยากรบุคคล</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum23.height = tasks.form23.form23_1.height + tasks.form23.form23_2.height + tasks.form23.form23_3.height + tasks.form23.form23_4.height + tasks.form23.form23_5.height + tasks.form23.form23_6.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum23.moderate = tasks.form23.form23_1.moderate + tasks.form23.form23_2.moderate + tasks.form23.form23_3.moderate + tasks.form23.form23_4.moderate + tasks.form23.form23_5.moderate + tasks.form23.form23_6.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum23.low = tasks.form23.form23_1.low + tasks.form23.form23_2.low + tasks.form23.form23_3.low + tasks.form23.form23_4.low + tasks.form23.form23_5.low + tasks.form23.form23_6.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum23.aic = tasks.form23.form23_1.aic + tasks.form23.form23_2.aic + tasks.form23.form23_3.aic + tasks.form23.form23_4.aic + tasks.form23.form23_5.aic + tasks.form23.form23_6.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum23.height + sum23.moderate + sum23.low + sum23.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 24 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการบริหารด้านบัญชีและการเงิน</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum24.height = tasks.form24.form24_1.height + tasks.form24.form24_2.height + tasks.form24.form24_3.height + tasks.form24.form24_4.height + tasks.form24.form24_5.height + tasks.form24.form24_6.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum24.moderate = tasks.form24.form24_1.moderate + tasks.form24.form24_2.moderate + tasks.form24.form24_3.moderate + tasks.form24.form24_4.moderate + tasks.form24.form24_5.moderate + tasks.form24.form24_6.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum24.low = tasks.form24.form24_1.low + tasks.form24.form24_2.low + tasks.form24.form24_3.low + tasks.form24.form24_4.low + tasks.form24.form24_5.low + tasks.form24.form24_6.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum24.aic = tasks.form24.form24_1.aic + tasks.form24.form24_2.aic + tasks.form24.form24_3.aic + tasks.form24.form24_4.aic + tasks.form24.form24_5.aic + tasks.form24.form24_6.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum24.height + sum24.moderate + sum24.low + sum24.aic }}</p>
                    </b-col>
                </b-row>
                <!-- 25 -->
                <b-row class="border p-2">
                    <b-col cols="7" v-for="task in 1" :key="task">
                        <ul>
                            <li><p>กระบวนการควบคุมทั่วไปด้านระบบเทคโนโลยีสารสนเทศ (IT General Control)</p></li>
                        </ul>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum25.height = tasks.form25.form25_1.height }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum25.moderate = tasks.form25.form25_1.moderate }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum25.low = tasks.form25.form25_1.low }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum25.aic = tasks.form25.form25_1.aic }}</p>
                    </b-col>
                    <b-col cols="1" class="text-center">
                        <p>{{ sum25.height + sum25.moderate + sum25.low + sum25.aic }}</p>
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
                    <b-col  cols="7">
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
        <resultCircle></resultCircle>
    </div>
</template>

<script>
import resultCircle from '../components/ResultCircle.vue'
import { api } from '../helpers/Helpers';
export default {
    name: "Show",
    components: {
        resultCircle
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
         
            totalHeightPLC: '',
            totalModeratePLC: '',
            totalLowPLC: '',
            totalAicPLC: '',

            totalPLC: '',
            totalELC: ''
        }
    },
    
    async mounted() {
        this.tasks = await api.gettask(this.$route.params.id);
  },
  computed: {
    resultHeightPLC() {
        return  this.sum18.height + this.sum19.height + this.sum20.height + this.sum21.height +
                this.sum22.height + this.sum23.height + this.sum24.height + this.sum25.height
       
    },
    resultModeratePLC() {
        return  this.sum18.moderate + this.sum19.moderate + this.sum20.moderate + this.sum21.moderate +
                this.sum22.moderate + this.sum23.moderate + this.sum24.moderate + this.sum25.moderate
                         
    },
    resultLowPLC() {
        return  this.sum18.low + this.sum19.low + this.sum20.low + this.sum21.low +
                this.sum22.low + this.sum23.low + this.sum24.low + this.sum25.low
                     
    },
    resultAicPLC() {
        return  this.sum18.aic + this.sum19.aic + this.sum20.aic + this.sum21.aic +
                this.sum22.aic + this.sum23.aic + this.sum24.aic + this.sum25.aic
    },

    resultHeightELC() {
        return  this.sum1.height + this.sum2.height + this.sum3.height + this.sum4.height +
                this.sum5.height + this.sum6.height + this.sum7.height + this.sum8.height +
                this.sum9.height + this.sum10.height + this.sum11.height + this.sum12.height +
                this.sum13.height + this.sum14.height + this.sum15.height + this.sum16.height + this.sum17.height
    },

    resultModerateELC() {
        return  this.sum1.moderate + this.sum2.moderate + this.sum3.moderate + this.sum4.moderate +
                this.sum5.moderate + this.sum6.moderate + this.sum7.moderate + this.sum8.moderate +
                this.sum9.moderate + this.sum10.moderate + this.sum11.moderate + this.sum12.moderate +
                this.sum13.moderate + this.sum14.moderate + this.sum15.moderate + this.sum16.moderate + this.sum17.moderate
    },

    resultLowELC() {
        return  this.sum1.low + this.sum2.low + this.sum3.low + this.sum4.low +
                this.sum5.low + this.sum6.low + this.sum7.low + this.sum8.low +
                this.sum9.low + this.sum10.low + this.sum11.low + this.sum12.low +
                this.sum13.low + this.sum14.low + this.sum15.low + this.sum16.low + this.sum17.low
    },

    resultAicELC() {
        return  this.sum1.aic + this.sum2.aic + this.sum3.aic + this.sum4.aic +
                this.sum5.aic + this.sum6.aic + this.sum7.aic + this.sum8.aic +
                this.sum9.aic + this.sum10.aic + this.sum11.aic + this.sum12.aic +
                this.sum13.aic + this.sum14.aic + this.sum15.aic + this.sum16.aic + this.sum17.aic
    },
  }
}
</script>