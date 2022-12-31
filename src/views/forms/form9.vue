<template>
    <div>
        <div class="container">
            <!-- 24. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-24 icon="arrow-down-right-square-fill"></b-icon>
                    <p>24. กระบวนการควบคุมทั่วไปด้านระบบเทคโนโลยีสารสนเทศ</p>
                </header>
                <b-collapse id="collapse-24" class="mt-2">
                    <div class="container-form">
                        <!-----------24.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.1</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_1.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------24.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.2</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_2.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_2.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------24.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.3</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_3.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_3.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------24.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.4</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_4.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_4.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------24.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.5</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_5.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_5.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_5.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------24.6---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">24.6</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและ ระเบียบการ ปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form24.form24_6.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form24.form24_6.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form24.form24_6.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form24.form24_6.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form24.form24_6.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 25. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-25 icon="arrow-down-right-square-fill"></b-icon>
                    <p>25. กระบวนการควบคุมทั่วไปด้านระบบเทคโนโลยีสารสนเทศ (IT General Control)</p>
                </header>
                <b-collapse id="collapse-25" class="mt-2">
                    <div class="container-form">
                        <!-----------25.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">25.1</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">นโยบาย คู่มือและระเบียบการปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form25.form25_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form25.form25_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form25.form25_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form25.form25_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form25.form25_1.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-collapse>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-report9',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form24: {
                        form24_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form24_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form24_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form24_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form24_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form24_6: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },

                    },
                    form25: {
                        form25_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    },
                }
            }
        }
    }
}
</script>