<template>
    <div>
        <div class="container">

            <!-- 14. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-14 icon="arrow-down-right-square-fill"></b-icon>
                    <p>14. องค์กรสื่อสารข้อมูลภายในองค์กร
                        ซึ่งรวมถึงวัตถุประสงค์และความรับผิดชอบต่อการควบคุมภายในที่จำเป็นต่อการสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่วางไว้
                    </p>
                </header>
                <b-collapse id="collapse-14" class="mt-2">
                    <div class="container-form">
                        <!-----------14.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">14.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทมีกระบวนการสื่อสารข้อมูลภายในอย่างมีประสิทธิภาพ
                                        และมีช่องทางการสื่อสารที่เหมาะสม เพื่อสนับสนุนการควบคุมภายใน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form14.form14_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form14.form14_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form14.form14_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form14.form14_1.aic
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
                                    <b-form-select v-model="forms.form14.form14_1.selected"
                                        :options="forms.form14.form14_1.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form14.form14_1.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------14.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">14.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทมีการรายงานข้อมูลที่สำคัญถึงคณะกรรมการบริษัทอย่างสม่ำเสมอ
                                        และคณะกรรมการบริษัทสามารถเข้าถึงแหล่งสารสนเทศที่จำเป็นต่อการปฏิบัติงาน
                                        หรือสอบทานรายการต่างๆ ตามที่ต้องการ เช่น การกำหนดบุคคลที่เป็นศูนย์ติดต่อ
                                        เพื่อให้สามารถติดต่อขอข้อมูลอื่นนอกจากที่ได้รับจากผู้บริหาร
                                        รวมทั้งการติดต่อสอบถามข้อมูลจากผู้สอบบัญชี ผู้ตรวจสอบภายใน
                                        การจัดประชุมระหว่างคณะกรรมการและผู้บริหารตามที่คณะกรรมการร้องขอ
                                        การจัดกิจกรรมพบปะหารือระหว่างคณะกรรมการและผู้บริหารนอกเหนือจากการประชุมคณะกรรมการ
                                        เป็นต้น
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form14.form14_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form14.form14_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form14.form14_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form14.form14_2.aic
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
                                    <b-form-select v-model="forms.form14.form14_2.selected"
                                        :options="forms.form14.form14_2.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form14.form14_2.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------14.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">14.3</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทจัดให้มีช่องทางการสื่อสารพิเศษหรือช่องทางลับเพื่อให้บุคคลต่าง ๆ
                                        ภายในบริษัทสามารถแจ้งข้อมูลหรือเบาะแสเกี่ยวกับการฉ้อฉลหรือทุจริตภายในบริษัท
                                        (whistle-blower hotline) ได้อย่างปลอดภัย</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form14.form14_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form14.form14_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form14.form14_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form14.form14_3.aic
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
                                    <b-form-select v-model="forms.form14.form14_3.selected"
                                        :options="forms.form14.form14_3.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form14.form14_3.currentAction"></b-form-textarea>
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
    name: 'form-report5',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form14: {
                        form14_1: {
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
                        form14_2: {
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
                        form14_3: {
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