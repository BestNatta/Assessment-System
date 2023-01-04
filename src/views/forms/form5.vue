<template>
    <div>
        <div class="container">
            <!-- 13. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-13 icon="arrow-down-right-square-fill"></b-icon>
                    <p>13. องค์กรข้อมูลที่เกี่ยวข้องและมีคุณภาพ
                        เพื่อสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่กำหนดไว้</p>
                </header>
                <b-collapse id="collapse-13" class="mt-2">
                    <div class="container-form">
                        <!-----------13.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดข้อมูลที่ต้องการใช้ในการดำเนินงาน
                                        ทั้งข้อมูลจากภายในและภายนอกองค์กรที่มีคุณภาพและเกี่ยวข้องต่องาน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_1.group" :options="forms.form13.form13_1.options13_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------13.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทพิจารณาทั้งต้นทุนและประโยชน์ที่จะได้รับ
                                        รวมถึงปริมาณและความถูกต้องของข้อมูล</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_2.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_2.group" :options="forms.form13.form13_2.options13_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------13.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทดำเนินการเพื่อให้คณะกรรมการมีข้อมูลที่สำคัญอย่างเพียงพอสำหรับใช้ประกอบการตัดสินใจ
                                        ตัวอย่างข้อมูลที่สำคัญ เช่น รายละเอียดของเรื่องที่เสนอให้พิจารณา เหตุผล
                                        ผลกระทบต่อบริษัท</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_3.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_3.group" :options="forms.form13.form13_3.options13_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------13.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทดำเนินการเพื่อให้กรรมการบริษัทได้รับหนังสือนัดประชุมหรือเอกสารประกอบการประชุมที่ระบุข้อมูลที่จำเป็นและเพียงพอต่อการพิจารณาก่อนการประชุมล่วงหน้าอย่างน้อยภายในระยะเวลาขั้นต่ำตามที่กฎหมายกำหนด</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_4.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_4.group" :options="forms.form13.form13_4.options13_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------13.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.5</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทดำเนินการเพื่อให้รายงานการประชุมคณะกรรมการมีรายละเอียดตามควรเพื่อให้สามารถตรวจสอบย้อนหลังเกี่ยวกับความเหมาะสมในการปฏิบัติหน้าที่ของกรรมการแต่ละราย
                                        เช่น การบันทึกข้อซักถามของกรรมการ
                                        ความเห็นหรือข้อสังเกตของกรรมการในเรื่องที่พิจารณา
                                        ความเห็นของกรรมการรายที่ไม่เห็นด้วยกับเรื่องที่เสนอพร้อมเหตุผล เป็นต้น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_5.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_5.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_5.group" :options="forms.form13.form13_5.options13_5"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_5.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------13.6---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">13.6</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีการดำเนินการดังต่อไปนี้ <br>
                                        • มีการจัดเก็บเอกสารสำคัญ ไว้อย่างครบถ้วนเป็นหมวดหมู่ <br>
                                        •
                                        กรณีที่ได้รับแจ้งจากผู้สอบบัญชีหรือผู้ตรวจสอบภายในว่ามีข้อบกพร่องในการควบคุมภายใน
                                        บริษัทได้แก้ไขข้อบกพร่องนั้นอย่างครบถ้วนแล้ว
                                        เช่น การบันทึกข้อซักถามของกรรมการ
                                        ความเห็นหรือข้อสังเกตของกรรมการในเรื่องที่พิจารณา
                                        ความเห็นของกรรมการรายที่ไม่เห็นด้วยกับเรื่องที่เสนอพร้อมเหตุผล เป็นต้น
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form13.form13_6.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form13.form13_6.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form13.form13_6.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form13.form13_6.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form13.form13_6.group" :options="forms.form13.form13_6.options13_6"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form13.form13_6.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

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
                            <b-col cols="6" >
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
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form14.form14_1.group" :options="forms.form14.form14_1.options14_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form14.form14_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------14.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">14.2</b>
                            <b-col cols="6" >
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
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form14.form14_2.group" :options="forms.form14.form14_2.options14_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form14.form14_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------14.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">14.3</b>
                            <b-col cols="6" >
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
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form14.form14_3.group" :options="forms.form14.form14_3.options14_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form14.form14_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

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
                            <b-col cols="6" >
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
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form15.form15_1.group" :options="forms.form15.form15_1.options15_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form15.form15_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------15.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">15.2</b>
                            <b-col cols="6" >
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
                            <b-col cols="5" >
                                <b-form-group content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form15.form15_2.group" :options="forms.form15.form15_2.options15_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form15.form15_2.currentAction"></b-form-textarea>
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
                    form13: {
                        form13_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options13_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form13_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options13_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form13_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options13_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form13_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options13_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form13_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options13_5: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form13_6: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options13_6: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form14: {
                        form14_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options14_1: [
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
                            group: 'Board of Directors', 
                            options14_2: [
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
                            group: 'Operation', 
                            options14_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form15: {
                        form15_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options15_1: [
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
                            group: 'Operation', 
                            options15_2: [
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