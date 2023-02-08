<template>
    <div v-if="forms.form1">
        <!-- Descriptions -->
        <div class="container mb-5 w-75 text-center">
            <h4 class="mb-5"><u>เกณฑ์การจัดระดับความสำคัญ</u></h4>
            <table id="tasks" class="ui celled compact table">
                <thead>
                    <tr>
                        <th class="th-lavel text-center"><b-icon icon="kanban" scale="1"></b-icon> ระดับความสำคัญ</th>
                        <th class="th-description text-center"><i class="info circle icon"></i>คำอธิบาย</th>
                    </tr>
                </thead>
                <tr>
                    <th class="th-height">สูง</th>
                    <td>ประเด็นที่การควบคุมภายในต้องได้รับการแก้ไขอย่างเร่งด่วน เนื่องจากเป็นการ
                        ควบคุมที่มีความสำคัญสูงตามแบบประเมินความเพียงพอของระบบการควบคุมภายใน
                        แต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่ยังไม่เพียงพอในประเด็นที่สำคัญ
                    </td>
                </tr>
                <tr>
                    <th class="th-moderate">ปานกลาง</th>
                    <td>ประเด็นที่การควบคุมภายในควรได้รับการแก้ไข เนื่องจากเป็นการควบคุมที่สำคัญตาม
                        แนวทางการควบคุมภายในที่ดีแต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่
                        ยังไม่เพียงพอ
                    </td>
                </tr>
                <tr>
                    <th class="th-low">ต่ำ</th>
                    <td>ประเด็นที่การควบคุมภายในมีความเพียงพอตามหลักการควบคุมภายใน ทำให้บริษัท
                        สามารถดำเนินการต่อไปตามปกติแต่ควรต้องได้รับการระวังในกรณีที่การดำเนินงาน
                        ของบริษัทมีการเปลี่ยนแปลงและทำให้ระดับความเสี่ยงของประเด็นนี้สูงขึ้น ผู้รายงาน
                        และติดตามประเด็นนี้ควรเป็นเจ้าของกระบวนการผู้ตรวจสอบภายในหรือผู้บริหารที่
                        เกี่ยวข้อง
                    </td>
                </tr>
                <tr>
                    <th class="th-aic">AIC</th>
                    <td>ระบบการควบคุมภายในที่มีอยู่ในปัจจุบันเพียงพอและมีประสิทธิผล
                        (Appropriate Internal Control)
                    </td>
                </tr>
            </table>
        </div>

        <div class="container">
            <b-row class="mt-5">
                <b-col class="text-center">
                    <h4><u>สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</u></h4>
                </b-col>
            </b-row>

            <div class="form-content">

                <!-- 1. -->
                <section class="mb-4">
                    <header class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-1 icon="arrow-down-right-square-fill"></b-icon>
                        <p>1. องค์กรแสดงถึงความยึดมั่นในคุณค่าของความซื่อตรง (Integrity) และจริยธรรม</p>
                    </header>
                    <b-collapse id="collapse-1" class="mt-2">
                        <div class="container-form">
                            <!-----------1.1---------->
                            <b-row class="px-3 mt-4 d-flex justify-content-between">
                                <b>1.1</b>
                                <b-col cols="6">
                                    <div class="form-offer">
                                        <!-- <label>คณะกรรมการและผู้บริหารกำหนดแนวทาง
                                            และมีการปฏิบัติที่อยู่บนหลักความซื่อตรงและการรักษาจรรยาบรรณในการดำเนินงานที่ครอบคลุมถึง<br>
                                            • การปฏิบัติหน้าที่ประจำวันและการตัดสินใจในเรื่องต่างๆ<br>
                                            • การปฏิบัติต่อคู่ค้า ลูกค้า และบุคคลภายนอก
                                        </label> -->
                                        <b-input v-model="forms.form1.form1_1.title"></b-input>
                                    </div>
                                    <b-row class="mt-5 d-block px-3">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form1.form1_1.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form1.form1_1.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form1.form1_1.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form1.form1_1.aic
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
                                        <b-form-select v-model="forms.form1.form1_1.selected"
                                            :options="forms.form1.form1_1.options"></b-form-select>
                                    </b-form-group>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <b-form-group content-cols="12" label-cols="12">
                                                <b>การดำเนินการในปัจจุบัน</b>
                                                <b-form-textarea rows="5"
                                                    v-model="forms.form1.form1_1.currentAction"></b-form-textarea>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.2---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.2</b>
                                <b-col cols="6">
                                    <div class="form-offer">
                                        <label
                                            for="">มีข้อกำหนดที่เป็นลายลักษณ์อักษรให้ผู้บริหารและพนักงานปฏิบัติหน้าที่ด้วยความซื่อตรงและรักษาจรรยาบรรณ
                                            ที่ครอบคลุมถึง<br>
                                            • มีข้อกำหนดเกี่ยวกับจริยธรรม (Code of conduct) สำหรับผู้บริหารและพนักงาน
                                            ที่เหมาะสม<br>
                                            •
                                            มีข้อกำหนดห้ามผู้บริหารและพนักงานปฏิบัติตนในลักษณะที่อาจก่อให้เกิดความขัดแย้งทางผลประโยชน์กับกิจการ
                                            ซึ่งรวมถึงการห้ามคอร์รัปชั่นอันทำให้เกิดความเสียหายต่อองค์กร<br>
                                            • มีบทลงโทษที่เหมาะสมหากมีการฝ่าฝืนข้อกำหนดข้างต้น<br>
                                            • มีการสื่อสารข้อกำหนดและบทลงโทษข้างต้นให้ผู้บริหารและพนักงานทุกคนรับทราบ
                                            เช่น
                                            รวมอยู่ในการปฐมนิเทศพนักงานใหม่
                                            ให้พนักงานลงนามรับทราบข้อกำหนดและบทลงโทษเป็นประจำทุกปี
                                            รวมทั้งมีการเผยแพร่ Code of conduct ให้แก่พนักงานและบุคคลภายนอกได้รับทราบ

                                        </label>
                                    </div>
                                    <b-row class="mt-5 d-block px-3">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form1.form1_2.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form1.form1_2.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form1.form1_2.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form1.form1_2.aic
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
                                        <b-form-select v-model="forms.form1.form1_2.selected"
                                            :options="forms.form1.form1_2.options"></b-form-select>
                                    </b-form-group>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <b-form-group content-cols="12" label-cols="12">
                                                <b>การดำเนินการในปัจจุบัน</b>
                                                <b-form-textarea rows="5"
                                                    v-model="forms.form1.form1_2.currentAction"></b-form-textarea>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.3---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.3</b>
                                <b-col cols="6">
                                    <div class="form-offer">
                                        <label for="">มีกระบวนการติดตามและประเมินผลการปฏิบัติตาม Code of conduct <br>
                                            •
                                            การติดตามและประเมินผลโดยหน่วยงานตรวจสอบภายในหรือหน่วยงานกำกับดูแลการปฏิบัติ
                                            (compliance unit)
                                            <br>
                                            • การประเมินตนเองโดยผู้บริหารและพนักงาน <br>
                                            • การประเมินโดยผู้เชี่ยวชาญที่เป็นอิสระจากภายนอกองค์กร
                                        </label>
                                    </div>
                                    <b-row class="mt-5 d-block px-3">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form1.form1_3.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form1.form1_3.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form1.form1_3.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form1.form1_3.aic
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
                                        <b-form-select v-model="forms.form1.form1_3.selected"
                                            :options="forms.form1.form1_3.options"></b-form-select>
                                    </b-form-group>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <b-form-group content-cols="12" label-cols="12">
                                                <b>การดำเนินการในปัจจุบัน</b>
                                                <b-form-textarea rows="5"
                                                    v-model="forms.form1.form1_3.currentAction"></b-form-textarea>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.4---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.4</b>
                                <b-col cols="6">
                                    <div class="form-offer">
                                        <label for="">มีการจัดการอย่างทันเวลา
                                            หากพบการไม่ปฏิบัติตามข้อกำหนดเกี่ยวกับความซื่อตรงและการรักษาจรรยาบรรณ <br>
                                            • มีกระบวนการที่ทำให้สามารถตรวจพบการฝ่าฝืนได้ภายในเวลาที่เหมาะสม <br>
                                            • มีกระบวนการที่ทำให้สามารถลงโทษหรือจัดการกับการฝ่าฝืนได้อย่างเหมาะสม
                                            และภายในเวลาอันควร <br>
                                            • มีการแก้ไขการกระทำที่ขัดต่อหลักความซื่อตรงและการรักษาจรรยาบรรณอย่างเหมาะสม
                                            และภายในเวลาอันควร
                                        </label>
                                    </div>
                                    <b-row class="mt-5 d-block px-3">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form1.form1_4.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form1.form1_4.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form1.form1_4.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form1.form1_4.aic
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
                                        <b-form-select v-model="forms.form1.form1_4.selected"
                                            :options="forms.form1.form1_4.options"></b-form-select>
                                    </b-form-group>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <b-form-group content-cols="12" label-cols="12">
                                                <b>การดำเนินการในปัจจุบัน</b>
                                                <b-form-textarea rows="5"
                                                    v-model="forms.form1.form1_4.currentAction"></b-form-textarea>
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
    </div>
</template>

<script>
export default {
    name: 'form-1',

    data() {
        return {
        }
    },

    props: ['forms'],

    mounted() {
        // console.log(this.forms)
    },
    watch: {
        forms(newValue, oldValue) {
            console.log(newValue)
            console.log(oldValue)
        }
    }
} 
</script>