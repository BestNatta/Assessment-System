<template>
    <div>
        <div class="container">
            <!-- 2. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-2 icon="arrow-down-right-square-fill"></b-icon>
                    <p>2. คณะกรรมการมีความเป็นอิสระจากฝ่ายบริหาร และทำหน้าที่กำกับดูแล (Oversight)
                        และพัฒนาการดำเนินการด้านการควบคุมภายใน</p>
                </header>
                <b-collapse id="collapse-2" class="mt-2">
                    <div class="container-form">
                        <!-----------2.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">มีการกำหนดบทบาทหน้าที่ของคณะกรรมการแยกจากฝ่ายบริหาร
                                        โดยได้สงวนสิทธิ์อำนาจเฉพาะของคณะกรรมการไว้อย่างชัดเจน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_1.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_1.aic
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
                                    <b-form-select v-model="forms.form2.form2_1.selected"
                                        :options="forms.form2.form2_1.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------2.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการบริษัทกำกับดูแลให้มีการกำหนดเป้าหมายการดำเนินธุรกิจที่ชัดเจนและวัดผลได้
                                        เพื่อเป็นแนวทางในการปฏิบัติงานของผู้บริหารและพนักงาน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_2.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_2.aic
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
                                    <b-form-select v-model="forms.form2.form2_2.selected"
                                        :options="forms.form2.form2_2.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------2.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.3</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการบริษัทกำกับดูแลให้บริษัทกำหนดบทบาทหน้าที่ของคณะกรรมการและผู้บริหารให้ถูกต้องตามกฎหมาย
                                        กฎบัตร ซึ่งครอบคลุมบทบาทที่สำคัญของคณะกรรมการตรวจสอบ ผู้สอบบัญชี
                                        ผู้ตรวจสอบภายใน
                                        และผู้รับผิดชอบต่อรายงานทางการเงิน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_3.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_3.aic
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
                                    <b-form-select v-model="forms.form2.form2_3.selected"
                                        :options="forms.form2.form2_3.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------2.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.4</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">คณะกรรมการบริษัทเป็นผู้มีความรู้เกี่ยวกับธุรกิจของบริษัท
                                        และมีความเชี่ยวชาญที่เป็นประโยชน์ต่อบริษัท
                                        หรือสามารถขอคำแนะนำจากผู้เชี่ยวชาญในเรื่องนั้นๆได้</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_4.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_4.aic
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
                                    <b-form-select v-model="forms.form2.form2_4.selected"
                                        :options="forms.form2.form2_4.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>

                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------2.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.5</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">คณะกรรมการของบริษัทประกอบด้วยกรรมการอิสระที่มีความรู้
                                        ความสามารถน่าเชื่อถือ
                                        และมีความเป็นอิสระในการปฏิบัติหน้าที่อย่างแท้จริง เช่น
                                        ไม่มีความสัมพันธ์ทางธุรกิจกับบริษัท
                                        ไม่มีความสัมพันธ์อื่นใด
                                        อันอาจมีอิทธิพลต่อการใช้ดุลยพินิจและปฏิบัติหน้าที่อย่างเป็นอิสระ
                                        ในจำนวนที่เหมาะสมเพียงพอ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_5.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_5.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_5.aic
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
                                    <b-form-select v-model="forms.form2.form2_5.selected"
                                        :options="forms.form2.form2_5.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_5.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>

                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------2.6---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">2.6</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">คณะกรรมการบริษัทกำกับดูแลการพัฒนาและปฏิบัติเรื่องการควบคุมภายในในองค์กร
                                        ซึ่งครอบคลุมทั้งการสร้างสภาพแวดล้อมการควบคุม การประเมินความเสี่ยง
                                        กิจกรรมการควบคุม
                                        ข้อมูลและการสื่อสาร และการติดตาม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form2.form2_6.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate" v-model=forms.form2.form2_6.moderate
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form2.form2_6.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form2.form2_6.aic
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
                                    <b-form-select v-model="forms.form2.form2_6.selected"
                                        :options="forms.form2.form2_6.options"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form2.form2_6.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
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
    name: 'form-report1',
    data() {
        return {

        }
    },
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form2: {
                        form2_1: {
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
                        form2_2: {
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
                        form2_3: {
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
                        form2_4: {
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
                        form2_5: {
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
                        form2_6: {
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
    },

} 
</script>