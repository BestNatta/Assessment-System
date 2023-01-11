<template>
    <div>
        <div class="container">

            <!-- 17. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-17 icon="arrow-down-right-square-fill"></b-icon>
                    <p>17. องค์กรประเมินและสื่อสารข้อบกพร่องของการควบคุมภายในอย่างทันเวลาต่อบุคคลที่รับผิดชอบ
                        ซึ่งรวมถึงผู้บริหารระดับสูงและคณะกรรมการตามความเหมาะสม</p>
                </header>
                <b-collapse id="collapse-17" class="mt-2">
                    <div class="container-form">
                        <!-----------17.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">17.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทประเมินผลและสื่อสารข้อบกพร่องของการควบคุมภายใน
                                        และดำเนินการเพื่อติดตามแก้ไขอย่างทันท่วงที
                                        หากผลการดำเนินงานที่เกิดขึ้นแตกต่างจากเป้าหมายที่กำหนดไว้อย่างมีนัยสำคัญ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form17.form17_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form17.form17_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form17.form17_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form17.form17_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form17.form17_1.selected"
                                        :options="forms.form17.form17_1.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form17.form17_1.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------17.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">17.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทมีนโยบายการรายงาน ดังนี้ <br>
                                        • ฝ่ายบริหารต้องรายงานต่อคณะกรรมการบริษัทโดยพลัน
                                        ในกรณีที่เกิดเหตุการณ์หรือสงสัยว่ามีเหตุการณ์ทุจริตอย่างร้ายแรง
                                        มีการปฏิบัติที่ฝ่าฝืนกฎหมาย หรือมีการกระทำที่ผิดปกติอื่น
                                        ซึ่งอาจกระทบต่อชื่อเสียงและฐานะการเงินของบริษัทอย่างมีนัยสำคัญ <br>
                                        • รายงานข้อบกพร่องที่เป็นสาระสำคัญ พร้อมแนวทางการแก้ไขปัญหา
                                        (แม้ว่าจะได้เริ่มดำเนินการจัดการแล้ว) ต่อคณะกรรมการบริษัท/คณะกรรมการตรวจสอบ
                                        เพื่อพิจารณาภายในระยะเวลาอันควร <br>
                                        •
                                        รายงานความคืบหน้าในการปรับปรุงข้อบกพร่องที่เป็นสาระสำคัญต่อคณะกรรมการบริษัท/คณะกรรมการตรวจสอบ
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form17.form17_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form17.form17_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form17.form17_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form17.form17_2.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form17.form17_2.selected"
                                        :options="forms.form17.form17_2.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form17.form17_2.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-report6',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form17: {
                        form17_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Management',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form17_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Board of Directors',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },

                    },
                }
            }
        }
    }
}
</script>