<template>
    <div>
        <div class="container">
            <b-row class="my-5">
                <b-col class="text-center">
                    <h4><u>การควบคุมภายในระดับกระบวนปฏิบัติงาน</u></h4>
                </b-col>
            </b-row>

            <!-- 19. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-19 icon="arrow-down-right-square-fill"></b-icon>
                    <p>19. กระบวนการจัดซื้อจัดจ้างและการจ่ายชําระเงิน</p>
                </header>
                <b-collapse id="collapse-19" class="mt-2">
                    <div class="container-form">
                        <!-----------19.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">19.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form19.form19_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form19.form19_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form19.form19_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form19.form19_1.aic
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
                                    <b-form-select v-model="forms.form19.form19_1.selected"
                                        :options="forms.form19.form19_1.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form19.form19_1.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------19.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">19.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">การขอซื้อ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form19.form19_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form19.form19_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form19.form19_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form19.form19_2.aic
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
                                    <b-form-select v-model="forms.form19.form19_2.selected"
                                        :options="forms.form19.form19_2.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form19.form19_2.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------19.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">19.3</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">การเปรียบเทียบและคัดเลือกผู้ขาย</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form19.form19_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form19.form19_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form19.form19_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form19.form19_3.aic
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
                                    <b-form-select v-model="forms.form19.form19_3.selected"
                                        :options="forms.form19.form19_3.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form19.form19_3.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------19.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">19.4</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">การบริหารจัดการฐานข้อมูล</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form19.form19_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form19.form19_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form19.form19_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form19.form19_4.aic
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
                                    <b-form-select v-model="forms.form19.form19_4.selected"
                                        :options="forms.form19.form19_4.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form19.form19_4.currentAction"></b-form-textarea>
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
    name: 'form-report7',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form19: {
                        form19_1: {
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
                        form19_2: {
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
                        form19_3: {
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
                        form19_4: {
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

                    },
                }
            }
        }
    }
}
</script>