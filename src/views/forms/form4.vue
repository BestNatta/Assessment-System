<template>
    <div>
        <div class="container">
            <!-- 10. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-10 icon="arrow-down-right-square-fill"></b-icon>
                    <p>10. องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กร
                        ให้อยู่ในระดับที่ยอมรับได้</p>
                </header>
                <b-collapse id="collapse-10" class="mt-2">
                    <div class="container-form">
                        <!-----------10.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">มาตรการควบคุมของบริษัทมีความเหมาะสมกับความเสี่ยง
                                        และลักษณะเฉพาะขององค์กร เช่น สภาพแวดล้อม ความซับซ้อนของงาน ลักษณะงาน
                                        ขอบเขตการดำเนินงาน รวมถึงลักษณะเฉพาะอื่น ๆ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_1.aic
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
                                    <b-form-select v-model="forms.form10.form10_1.group" :options="forms.form10.form10_1.options10_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form10.form10_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีมาตรการควบคุมภายในที่กำหนดเป็นลายลักษณ์อักษร
                                        และครอบคลุมกระบวนการต่างๆ อย่างเหมาะสม เช่น
                                        มีนโยบายและระเบียบวิธีปฏิบัติงานเกี่ยวกับธุรกรรมด้านการเงินการจัดซื้อ
                                        และการบริหารทั่วไป ตลอดจนกำหนดขอบเขต อำนาจหน้าที่
                                        และลำดับชั้นการอนุมัติของผู้บริหารในแต่ละระดับไว้อย่างชัดเจน รัดกุม
                                        เพื่อให้สามารถป้องกันการทุจริตได้ เช่น
                                        มีการกำหนดขนาดวงเงินและอำนาจอนุมัติของผู้บริหารแต่ละระดับ
                                        ขั้นตอนในการอนุมัติโครงการลงทุน ขั้นตอนการจัดซื้อและวิธีการคัดเลือกผู้ขาย
                                        การบันทึกข้อมูลรายละเอียดการตัดสินใจจัดซื้อ ขั้นตอนการเบิกจ่ายวัสดุอุปกรณ์ หรือ
                                        การเบิกใช้เครื่องมือต่างๆ เป็นต้น โดยได้จัดให้มีกระบวนการสำหรับกรณีต่าง ๆ
                                        ดังนี้<br>
                                        • การเก็บรวบรวมข้อมูลเกี่ยวกับผู้ถือหุ้นรายใหญ่ กรรมการ ผู้บริหาร
                                        และผู้ที่เกี่ยวข้องกับบุคคลดังกล่าว รวมทั้งบุคคลที่เกี่ยวโยงกัน
                                        เพื่อประโยชน์ในการติดตามและสอบทานการทำรายการระหว่างกัน
                                        หรือรายการที่อาจมีความขัดแย้งทางผลประโยชน์
                                        รวมทั้งมีการปรับปรุงข้อมูลให้เป็นปัจจุบันเสมอ <br>
                                        •
                                        กรณีที่บริษัทอนุมัติธุรกรรมหรือทำสัญญากับผู้ที่เกี่ยวข้องในลักษณะที่มีผลผูกพันบริษัทในระยะยาวไปแล้ว
                                        เช่น การทำสัญญาซื้อขายสินค้า การให้กู้ยืม การค้ำประกัน
                                        บริษัทได้ติดตามให้มั่นใจแล้วว่า
                                        มีการปฏิบัติเป็นไปตามเงื่อนไขที่ตกลงกันไว้ตลอดระยะเวลาที่มีผลผูกพันบริษัท เช่น
                                        ติดตามการชำระคืนหนี้ตามกำหนด มีการทบทวนความเหมาะสมของสัญญา เป็นต้น
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_2.aic
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
                                    <b-form-select v-model="forms.form10.form10_2.group" :options="forms.form10.form10_2.options10_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form10.form10_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดให้การควบคุมภายในมีความหลากหลายอย่างเหมาะสม เช่น
                                        การควบคุมแบบ manual และ automated หรือการควบคุมแบบป้องกันและติดตาม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_3.aic
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
                                    <b-form-select v-model="forms.form10.form10_3.group" :options="forms.form10.form10_3.options10_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form10.form10_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดให้มีการควบคุมภายในในทุกระดับขององค์กร เช่น
                                        ทั้งระดับกลุ่มบริษัท หน่วยธุรกิจ สายงาน ฝ่ายงาน แผนก หรือกระบวนการ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_4.aic
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
                                    <b-form-select v-model="forms.form10.form10_4.group" :options="forms.form10.form10_4.options10_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form10.form10_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.5</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีการแบ่งแยกหน้าที่ความรับผิดชอบในงาน 3 ด้านต่อไปนี้
                                        ออกจากกันโดยเด็ดขาด เพื่อเป็นการตรวจสอบซึ่งกันและกัน กล่าวคือ <br>
                                        (1) หน้าที่อนุมัติ <br>
                                        (2) หน้าที่บันทึกรายการบัญชีและข้อมูลสารสนเทศ <br>
                                        (3) หน้าที่ในการดูแลจัดเก็บทรัพย์สิน
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_5.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_5.aic
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
                                    <b-form-select v-model="forms.form10.form10_5.group" :options="forms.form10.form10_5.options10_5"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form10.form10_5.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 11. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-11 icon="arrow-down-right-square-fill"></b-icon>
                    <p>11. องค์กรเลือกและพัฒนากิจกรรมการควบคุมทั่วไปด้วยระบบเทคโนโลยี
                        เพื่อช่วยสนับสนุนการบรรลุวัตถุประสงค์</p>
                </header>
                <b-collapse id="collapse-11" class="mt-2">
                    <div class="container-form">
                        <!-----------11.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">11.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทควรกำหนดความเกี่ยวข้องกันระหว่างการใช้เทคโนโลยีสารสนเทศ
                                        ในกระบวนการปฏิบัติงานและการควบคุมทั่วไปของระบบสารสนเทศ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form11.form11_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form11.form11_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form11.form11_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form11.form11_1.aic
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
                                    <b-form-select v-model="forms.form11.form11_1.group" :options="forms.form11.form11_1.options11_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form11.form11_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------11.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">11.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทควรกำหนดการควบคุมของโครงสร้างพื้นฐานของระบบเทคโนโลยีให้มีความเหมาะสม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form11.form11_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form11.form11_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form11.form11_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form11.form11_2.aic
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
                                    <b-form-select v-model="forms.form11.form11_2.group" :options="forms.form11.form11_2.options11_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form11.form11_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------11.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">11.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทควรกำหนดการควบคุมด้านความปลอดภัยของระบบเทคโนโลยีให้มีความเหมาะสม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form11.form11_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form11.form11_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form11.form11_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form11.form11_3.aic
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
                                    <b-form-select v-model="forms.form11.form11_3.group" :options="forms.form11.form11_3.options11_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form11.form11_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------11.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">11.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทควรกำหนดการควบคุมกระบวนการได้มา การพัฒนา
                                        และการบำรุงรักษาระบบเทคโนโลยีให้มีความเหมาะสม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form11.form11_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form11.form11_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form11.form11_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form11.form11_4.aic
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
                                    <b-form-select v-model="forms.form11.form11_4.group" :options="forms.form11.form11_4.options11_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form11.form11_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 12. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-12 icon="arrow-down-right-square-fill"></b-icon>
                    <p>12. องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ
                        เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</p>
                </header>
                <b-collapse id="collapse-12" class="mt-2">
                    <div class="container-form">
                        <!-----------12.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีนโยบายที่รัดกุมเพื่อติดตามให้การทำธุรกรรมของผู้ถือหุ้นรายใหญ่
                                        กรรมการ ผู้บริหาร หรือผู้ที่เกี่ยวข้องกับบุคคลดังกล่าว
                                        ต้องผ่านขั้นตอนการอนุมัติที่กำหนด เช่น ข้อบังคับของบริษัท
                                        เกณฑ์ของตลาดหลักทรัพย์แห่งประเทศไทยเกณฑ์ของสำนักงาน –ก.ล.ต.
                                        เพื่อป้องกันการหาโอกาสหรือนำผลประโยชน์ของบริษัทไปใช้ส่วนตัว</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_1.aic
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
                                    <b-form-select v-model="forms.form12.form12_1.group" :options="forms.form12.form12_1.options12_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทมีนโยบายเพื่อให้การพิจารณาอนุมัติธุรกรรมกระทำโดยผู้ที่ไม่มีส่วนได้เสียในธุรกรรมนั้น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_2.aic
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
                                    <b-form-select v-model="forms.form12.form12_2.group" :options="forms.form12.form12_2.options12_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทมีนโยบายเพื่อให้การพิจารณาอนุมัติธุรกรรมคำนึงถึงประโยชน์สูงสุดของบริษัทเป็นสำคัญ
                                        และพิจารณาโดยถือเสมือนเป็นรายการที่กระทำกับบุคคลภายนอก (At arms’ length
                                        basis)</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_3.aic
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
                                    <b-form-select v-model="forms.form12.form12_3.group" :options="forms.form12.form12_3.options12_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีกระบวนการติดตามดูแลการดำเนินงานของบริษัทย่อยหรือบริษัทร่วม
                                        รวมทั้งกำหนดแนวทางให้บุคคลที่บริษัทแต่งตั้งให้เป็นกรรมการหรือผู้บริหาร
                                        ในบริษัทย่อยหรือร่วมนั้นถือปฏิบัติ
                                        (หากบริษัทไม่มีเงินลงทุนในบริษัทย่อยหรือบริษัทร่วมไม่ต้องตอบข้อนี้)</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_4.aic
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
                                    <b-form-select v-model="forms.form12.form12_4.group" :options="forms.form12.form12_4.options12_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.5</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทกำหนดหน้าที่และความรับผิดชอบในการนำนโยบายและกระบวนการไปปฏิบัติโดยผู้บริหารและพนักงาน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_5.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_5.aic
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
                                    <b-form-select v-model="forms.form12.form12_5.group" :options="forms.form12.form12_5.options12_5"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_5.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.6---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.6</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">นโยบายและกระบวนการปฏิบัติของบริษัทได้รับการนำไปใช้ในเวลาที่เหมาะสม
                                        โดยบุคลากรที่มีความสามารถรวมถึงการครอบคลุมกระบวนการแก้ไขข้อผิดพลาด
                                        ในการปฏิบัติงาน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_6.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_6.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_6.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_6.aic
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
                                    <b-form-select v-model="forms.form12.form12_6.group" :options="forms.form12.form12_6.options12_6"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_6.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------12.7---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">12.7</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัททบทวนนโยบายและกระบวนการปฏิบัติให้มีความเหมาะสมอยู่เสมอ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form12.form12_7.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form12.form12_7.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form12.form12_7.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form12.form12_7.aic
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
                                    <b-form-select v-model="forms.form12.form12_7.group" :options="forms.form12.form12_7.options12_7"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form12.form12_7.currentAction"></b-form-textarea>
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
    name: 'form-report4',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form10: {
                        form10_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options10_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options10_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options10_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options10_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options10_5: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form11: {
                        form11_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options11_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form11_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options11_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form11_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options11_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form11_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options11_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form12: {
                        form12_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options12_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options12_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options12_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options12_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options12_5: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_6: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options12_6: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form12_7: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options12_7: [
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