<template>
    <div>
        <div class="container">
            <!-- 15. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-15 icon="arrow-down-right-square-fill"></b-icon>
                    <p>15.องค์กรได้สื่อสารกับหน่วยงานภายนอก เกี่ยวกับประเด็นที่อาจมีผลกระทบต่อการควบคุมภายใน</p>
                </header>
                <b-collapse id="collapse-15" class="mt-2">
                    <div class="container-form">
                        <!-----------15.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">15.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทมีกระบวนการสื่อสารข้อมูลกับผู้มีส่วนได้เสียภายนอกองค์กรอย่างมีประสิทธิภาพ
                                        และมีช่องทางการสื่อสารที่เหมาะสม เพื่อสนับสนุนการควบคุมภายใน เช่น
                                        จัดให้มีเจ้าหน้าที่หรือหน่วยงานนักลงทุนสัมพันธ์ ศูนย์รับเรื่องร้องเรียน
                                        เป็นต้น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form15.form15_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form15.form15_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form15.form15_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form15.form15_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form15.form15_1.selected"
                                        :options="forms.form15.form15_1.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form15.form15_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------15.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">15.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทจัดให้มีช่องทางการสื่อสารพิเศษหรือช่องทางลับเพื่อให้ผู้มีส่วนได้เสียภายนอกองค์กรสามารถแจ้งข้อมูลหรือเบาะแสเกี่ยวกับการฉ้อฉลหรือทุจริต(whistle-blower
                                        hotline) แก่บริษัทได้อย่างปลอดภัย</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form15.form15_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form15.form15_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form15.form15_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form15.form15_2.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form15.form15_2.selected"
                                        :options="forms.form15.form15_2.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form15.form15_2.currentAction"></b-form-textarea>
                                        </b-form-group>
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
    name: 'form-report5',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form15: {
                        form15_1: {
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
                        form15_2: {
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