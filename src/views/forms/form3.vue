<template>
    <div>
        <div class="container">
            <!-- 7. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-7 icon="arrow-down-right-square-fill"></b-icon>
                    <p>7.
                        องค์กรระบุและวิเคราะห์ความเสี่ยงทุกประเภทที่อาจกระทบต่อการบรรลุวัตถุประสงค์ไว้อย่างครอบคลุมทั่วทั้งองค์กร
                    </p>
                </header>
                <b-collapse id="collapse-7" class="mt-2">
                    <div class="container-form">
                        <!-----------7.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">7.1</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทระบุความเสี่ยงทุกประเภทซึ่งอาจมีผลกระทบต่อการดำเนินธุรกิจทั้งระดับองค์กร
                                        หน่วยธุรกิจ ฝ่ายงาน และหน้าที่งานต่างๆ</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form7.form7_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form7.form7_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form7.form7_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form7.form7_1.aic
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
                                        v-model="forms.form7.form7_1.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------7.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">7.2</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทวิเคราะห์ความเสี่ยงทุกประเภทที่อาจเกิดจากทั้งปัจจัยภายในและปัจจัยภายนอกองค์กร
                                        ซึ่งรวมถึงความเสี่ยงด้านกลยุทธ์ การดำเนินงาน การรายงาน การปฏิบัติตามกฎเกณฑ์
                                        และด้านเทคโนโลยีสารสนเทศ</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form7.form7_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form7.form7_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form7.form7_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form7.form7_2.aic
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
                                        v-model="forms.form7.form7_2.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------7.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">7.3</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">ผู้บริหารทุกระดับมีส่วนร่วมในการบริหารความเสี่ยง</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form7.form7_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form7.form7_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form7.form7_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form7.form7_3.aic
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
                                        v-model="forms.form7.form7_3.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------7.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">7.4</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">บริษัทได้ประเมินความสำคัญของความเสี่ยง
                                        โดยพิจารณาทั้งโอกาสเกิดเหตุการณ์ และผลกระทบที่อาจเกิดขึ้น</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form7.form7_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form7.form7_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form7.form7_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form7.form7_4.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Operation</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form7.form7_4.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------7.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">7.5</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">บริษัทมีมาตรการและแผนปฏิบัติงานเพื่อจัดการความเสี่ยง
                                        โดยอาจเป็นการยอมรับความเสี่ยงนั้น (acceptance) การลดความเสี่ยง (reduction)
                                        การหลีกเลี่ยงความเสี่ยง (avoidance) หรือการร่วมรับความเสี่ยง (sharing)</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form7.form7_5.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form7.form7_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form7.form7_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form7.form7_5.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Operation</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form7.form7_5.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

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
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">บริษัทประเมินโอกาสที่จะเกิดการทุจริตขึ้น โดยครอบคลุมการทุจริตแบบต่างๆ
                                        เช่น การจัดทำรายงานทางการเงินเท็จ การทำให้สูญเสียทรัพย์สิน การคอร์รัปชั่น
                                        การที่ผู้บริหารสามารถฝ่าฝืนระบบควบคุมภายใน (Management override of internal
                                        controls) การเปลี่ยนแปลงข้อมูลในรายงานที่สำคัญ
                                        การได้มาหรือใช้ไปซึ่งทรัพย์สินโดยไม่ถูกต้อง เป็นต้น</label>
                                </div>
                                <b-row class="mt-5">
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
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form8.form8_1.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.2</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label for="">บริษัทได้ทบทวนเป้าหมายการปฏิบัติงานอย่างรอบคอบ
                                        โดยพิจารณาความเป็นไปได้ของเป้าหมายที่กำหนดแล้ว
                                        รวมทั้งได้พิจารณาความสมเหตุสมผลของการให้สิ่งจูงใจหรือผลตอบแทนแก่พนักงานแล้วด้วยว่า
                                        ไม่มีลักษณะส่งเสริมให้พนักงานกระทำไม่เหมาะสม เช่น
                                        ไม่ตั้งเป้าหมายยอดขายของบริษัทไว้สูงเกินความเป็นจริงจนทำให้เกิดแรงจูงใจในการตกแต่งตัวเลขยอดขาย
                                        เป็นต้น</label>
                                </div>
                                <b-row class="mt-5">
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
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Management</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form8.form8_2.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.3</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการตรวจสอบได้พิจารณาและสอบถามผู้บริหารเกี่ยวกับโอกาสในการเกิดทุจริต
                                        และมาตรการที่บริษัทดำเนินการเพื่อป้องกันหรือแก้ไขการทุจริต</label>
                                </div>
                                <b-row class="mt-5">
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
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Board of Directors</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form8.form8_3.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------8.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">8.4</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทได้สื่อสารให้พนักงานทุกคนเข้าใจและปฏิบัติตามนโยบายและแนวปฏิบัติที่กำหนดไว้</label>
                                </div>
                                <b-row class="mt-5">
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
                            <b-col cols="5" class="">
                                <b>กลุ่ม</b>
                                <p class="form-details">Operation</p>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5"
                                        v-model="forms.form8.form8_4.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 9. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-9 icon="arrow-down-right-square-fill"></b-icon>
                    <p>9. องค์กรสามารถระบุและประเมินความเปลี่ยนแปลงที่อาจมีผลกระทบต่อระบบการควบคุมภายใน</p>
                </header>
                <b-collapse id="collapse-9" class="mt-2">
                    <div class="container-form">
                        <!-----------9.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">9.1</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทประเมินการเปลี่ยนแปลงปัจจัยภายนอกองค์กรที่อาจมีผลกระทบต่อการดำเนินธุรกิจ
                                        การควบคุมภายใน และรายงานทางการเงิน
                                        ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form9.form9_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form9.form9_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form9.form9_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form9.form9_1.aic
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
                                        v-model="forms.form9.form9_1.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------9.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">9.2</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทประเมินการเปลี่ยนแปลงรูปแบบการทำธุรกิจที่อาจมีผลกระทบต่อการดำเนินธุรกิจ
                                        การควบคุมภายใน และรายงานทางการเงิน
                                        ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form9.form9_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form9.form9_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form9.form9_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form9.form9_2.aic
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
                                        v-model="forms.form9.form9_2.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------9.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">9.3</b>
                            <b-col cols="6" class="">

                                <div class="form-offer">
                                    <label
                                        for="">บริษัทประเมินการเปลี่ยนแปลงผู้นำองค์กรที่อาจมีผลกระทบต่อการดำเนินธุรกิจ
                                        การควบคุมภายใน และรายงานทางการเงิน
                                        ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                                </div>
                                <b-row class="mt-5">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form9.form9_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form9.form9_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form9.form9_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form9.form9_3.aic
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
                                        v-model="forms.form9.form9_3.currentAction"></b-form-textarea>
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
                    form7: {
                        form7_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form7_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form7_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form7_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form7_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    },
                    form8: {
                        form8_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form8_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form8_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form8_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    },
                    form9: {
                        form9_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form9_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form9_3: {
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