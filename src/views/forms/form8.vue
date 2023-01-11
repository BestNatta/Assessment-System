<template>
    <div>
        <div class="container">

            <!-- 8. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-8 icon="arrow-down-right-square-fill"></b-icon>
                    <p>8. องค์กรได้พิจารณาถึงโอกาสที่จะเกิดการทุจริต
                        ในการประเมินความเสี่ยงที่จะบรรลุวัตถุประสงค์ขององค์กร</p>
                </header>
                <b-collapse id="collapse-8" class="mt-2">
                    <div class="container-form">
                        <!-----------8.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทประเมินโอกาสที่จะเกิดการทุจริตขึ้น โดยครอบคลุมการทุจริตแบบต่างๆ
                                        เช่น การจัดทำรายงานทางการเงินเท็จ การทำให้สูญเสียทรัพย์สิน การคอร์รัปชั่น
                                        การที่ผู้บริหารสามารถฝ่าฝืนระบบควบคุมภายใน (Management override of internal
                                        controls) การเปลี่ยนแปลงข้อมูลในรายงานที่สำคัญ
                                        การได้มาหรือใช้ไปซึ่งทรัพย์สินโดยไม่ถูกต้อง เป็นต้น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form8.form8_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form8.form8_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form8.form8_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form8.form8_1.aic
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
                                    <b-form-select v-model="forms.form8.form8_1.selected"
                                        :options="forms.form8.form8_1.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form8.form8_1.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทได้ทบทวนเป้าหมายการปฏิบัติงานอย่างรอบคอบ
                                        โดยพิจารณาความเป็นไปได้ของเป้าหมายที่กำหนดแล้ว
                                        รวมทั้งได้พิจารณาความสมเหตุสมผลของการให้สิ่งจูงใจหรือผลตอบแทนแก่พนักงานแล้วด้วยว่า
                                        ไม่มีลักษณะส่งเสริมให้พนักงานกระทำไม่เหมาะสม เช่น
                                        ไม่ตั้งเป้าหมายยอดขายของบริษัทไว้สูงเกินความเป็นจริงจนทำให้เกิดแรงจูงใจในการตกแต่งตัวเลขยอดขาย
                                        เป็นต้น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form8.form8_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form8.form8_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form8.form8_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form8.form8_2.aic
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
                                    <b-form-select v-model="forms.form8.form8_2.selected"
                                        :options="forms.form8.form8_2.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form8.form8_2.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.3</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการตรวจสอบได้พิจารณาและสอบถามผู้บริหารเกี่ยวกับโอกาสในการเกิดทุจริต
                                        และมาตรการที่บริษัทดำเนินการเพื่อป้องกันหรือแก้ไขการทุจริต</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form8.form8_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form8.form8_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form8.form8_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form8.form8_3.aic
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
                                    <b-form-select v-model="forms.form8.form8_3.selected"
                                        :options="forms.form8.form8_3.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form8.form8_3.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.4</b>
                            <b-col cols="6">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทได้สื่อสารให้พนักงานทุกคนเข้าใจและปฏิบัติตามนโยบายและแนวปฏิบัติที่กำหนดไว้</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form8.form8_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form8.form8_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form8.form8_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form8.form8_4.aic
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
                                    <b-form-select v-model="forms.form8.form8_4.selected"
                                        :options="forms.form8.form8_4.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form8.form8_4.currentAction"></b-form-textarea>
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
    name: 'form-report3',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form8: {
                        form8_1: {
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
                        form8_2: {
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
                        form8_3: {
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
                        form8_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Operation',
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