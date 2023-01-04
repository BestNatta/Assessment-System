<template>
    <div>
        <div class="container">
            <!-- 4. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-4 icon="arrow-down-right-square-fill"></b-icon>
                    <p>4. องค์กรแสดงถึงความมุ่งมั่นในการจูงใจ พัฒนาและรักษาบุคลากรที่มีความรู้ความสามารถ</p>
                </header>
                <b-collapse id="collapse-4" class="mt-2">
                    <div class="container-form">
                        <!-----------4.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">4.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีนโยบายและวิธีการปฏิบัติเพื่อจัดหา พัฒนา
                                        และรักษาบุคลากรที่มีความรู้ความสามารถที่เหมาะสม
                                        และมีกระบวนการสอบทานนโยบายและวิธีการปฏิบัตินั้นอย่างสม่ำเสมอ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form4.form4_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form4.form4_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form4.form4_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form4.form4_1.aic
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
                                    <b-form-select v-model="forms.form4.form4_1.group" :options="forms.form4.form4_1.options4_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form4.form4_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------4.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">4.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีกระบวนการประเมินผลการปฏิบัติงาน
                                        การให้แรงจูงใจหรือรางวัลต่อบุคลากรที่มีผลการปฏิบัติงานดี
                                        และการจัดการต่อบุคลากรที่มีผลงานไม่บรรลุเป้าหมาย รวมถึง
                                        การสื่อสารกระบวนการเหล่านี้ให้ผู้บริหารและพนักงานทราบ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form4.form4_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form4.form4_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form4.form4_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form4.form4_2.aic
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
                                    <b-form-select v-model="forms.form4.form4_2.group" :options="forms.form4.form4_2.options4_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form4.form4_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------4.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">4.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">บริษัทมีกระบวนการแก้ไขปัญหาหรือเตรียมพร้อมสำหรับการขาดบุคลากรที่มีความรู้และความสามารถที่เหมาะสมอย่างทันเวลา</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form4.form4_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form4.form4_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form4.form4_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form4.form4_3.aic
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
                                    <b-form-select v-model="forms.form4.form4_3.group" :options="forms.form4.form4_3.options4_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form4.form4_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------4.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">4.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีกระบวนการสรรหา พัฒนา และรักษาผู้บริหารและพนักงานทุกคน เช่น
                                        การจัดระบบที่ปรึกษา
                                        (mentoring) และการฝึกอบรม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form4.form4_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form4.form4_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form4.form4_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form4.form4_4.aic
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
                                    <b-form-select v-model="forms.form4.form4_4.group" :options="forms.form4.form4_4.options4_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5" v-model="forms.form4.form4_4.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------4.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">4.5</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทมีแผนและกระบวนการสรรหาผู้สืบทอดตำแหน่ง (Successor plan)
                                        ที่สำคัญ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form4.form4_5.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form4.form4_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form4.form4_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form4.form4_5.aic
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
                                    <b-form-select v-model="forms.form4.form4_5.group" :options="forms.form4.form4_5.options4_5"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form4.form4_5.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 5. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-5 icon="arrow-down-right-square-fill"></b-icon>
                    <p>5. องค์กรกำหนดให้บุคลากรมีหน้าที่และความรับผิดชอบในการควบคุมภายใน
                        เพื่อให้บรรลุตามวัตถุประสงค์ขององค์กร</p>
                </header>
                <b-collapse id="collapse-5" class="mt-2">
                    <div class="container-form">
                        <!-----------5.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">5.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการบริษัทและผู้บริหารมีกระบวนการและการสื่อสารเชิงบังคับให้บุคลากรทุกคนมีความรับผิดชอบต่อการควบคุมภายใน
                                        และจัดให้มีการปรับปรุงแก้ไขกระบวนการปฏิบัติในกรณีที่จำเป็น</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form5.form5_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form5.form5_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form5.form5_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form5.form5_1.aic
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
                                    <b-form-select v-model="forms.form5.form5_1.group" :options="forms.form5.form5_1.options5_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form5.form5_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------5.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">5.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">คณะกรรมการบริษัทและผู้บริหารกำหนดตัวชี้วัดผลการปฏิบัติงาน
                                        การสร้างแรงจูงใจ
                                        และการให้รางวัล ที่เหมาะสม โดยพิจารณาทั้งเรื่องการปฏิบัติตาม Code of conduct
                                        และวัตถุประสงค์ในระยะสั้นและระยะยาวของบริษัท</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form5.form5_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form5.form5_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form5.form5_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form5.form5_2.aic
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
                                    <b-form-select v-model="forms.form5.form5_2.group" :options="forms.form5.form5_2.options5_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form5.form5_2.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------5.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">5.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการบริษัทและผู้บริหารประเมินแรงจูงใจและการให้รางวัลอย่างต่อเนื่องโดยเน้นให้สามารถเชื่อมโยงกับความสำเร็จของหน้าที่ในการปฏิบัติตามการควบคุมภายในด้วย</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form5.form5_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form5.form5_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form5.form5_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form5.form5_3.aic
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
                                    <b-form-select v-model="forms.form5.form5_3.group" :options="forms.form5.form5_3.options5_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form5.form5_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------5.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">5.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">คณะกรรมการบริษัทและผู้บริหารได้พิจารณาไม่ให้มีการสร้างแรงกดดันที่มากเกินไปในการปฏิบัติหน้าที่ของบุคลากรแต่ละคน</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form5.form5_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form5.form5_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form5.form5_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form5.form5_4.aic
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
                                    <b-form-select v-model="forms.form5.form5_4.group" :options="forms.form5.form5_4.options5_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form5.form5_4.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>

            <!-- 6. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-6 icon="arrow-down-right-square-fill"></b-icon>
                    <p>6. องค์กรกำหนดวัตถุประสงค์ไว้อย่างชัดเจนเพียงพอ เพื่อให้สามารถระบุและประเมินความเสี่ยงต่าง ๆ
                        ที่เกี่ยวข้องกับการบรรลุวัตถุประสงค์ขององค์กร</p>
                </header>
                <b-collapse id="collapse-6" class="mt-2">
                    <div class="container-form">
                        <!-----------6.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">6.1</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทสามารถปฏิบัติตามมาตรฐานการบัญชีที่รับรองโดยทั่วไป
                                        และเหมาะสมกับธุรกิจในขณะนั้น โดยแสดงได้ว่ารายการในรายงานทางการเงินมีตัวตนจริง
                                        ครบถ้วน แสดงถึงสิทธิหรือภาระผูกพันของบริษัทได้ถูกต้อง มีมูลค่าเหมาะสม
                                        และเปิดเผยข้อมูลครบถ้วน ถูกต้อง</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form6.form6_1.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form6.form6_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form6.form6_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form6.form6_1.aic
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
                                    <b-form-select v-model="forms.form6.form6_1.group" :options="forms.form6.form6_1.options6_1"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form6.form6_1.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------6.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">6.2</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดสาระสำคัญของรายการทางการเงิน โดยพิจารณาถึงปัจจัยที่สำคัญ
                                        เช่น ผู้ใช้รายงานทางการเงิน ขนาดของรายการ แนวโน้มของธุรกิจ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form6.form6_2.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form6.form6_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form6.form6_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form6.form6_2.aic
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
                                    <b-form-select v-model="forms.form6.form6_2.group" :options="forms.form6.form6_2.options6_2"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b>การดำเนินการในปัจจุบัน</b>
                                    <b-form-textarea rows="5" v-model="forms.form6.form6_2.currentAction"></b-form-textarea>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------6.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">6.3</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label
                                        for="">รายงานทางการเงินของบริษัทสะท้อนถึงกิจกรรมการดำเนินงานของบริษัทอย่างแท้จริง</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form6.form6_3.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form6.form6_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form6.form6_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form6.form6_3.aic
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
                                    <b-form-select v-model="forms.form6.form6_3.group" :options="forms.form6.form6_3.options6_3"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form6.form6_3.currentAction"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------6.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">6.4</b>
                            <b-col cols="6" >
                                <div class="form-offer">
                                    <label for="">คณะกรรมการหรือคณะกรรมการบริหารความเสี่ยง
                                        อนุมัติและสื่อสารนโยบายการบริหารความเสี่ยงให้ผู้บริหารและพนักงานทุกคนรับทราบและถือปฏิบัติ
                                        จนเป็นส่วนหนึ่งของวัฒนธรรมขององค์กร</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height" v-model=forms.form6.form6_4.height
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form6.form6_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form6.form6_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form6.form6_4.aic
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
                                    <b-form-select v-model="forms.form6.form6_4.group" :options="forms.form6.form6_4.options6_4"></b-form-select>
                                </b-form-group>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-group content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5" v-model="forms.form6.form6_4.currentAction"></b-form-textarea>
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
    name: 'form-report2',
    
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form4: {
                        form4_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options4_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form4_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options4_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form4_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options4_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form4_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options4_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form4_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Management', 
                            options4_5: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form5: {
                        form5_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options5_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form5_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options5_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form5_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options5_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form5_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options5_4: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                    form6: {
                        form6_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options6_1: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form6_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options6_2: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form6_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Operation', 
                            options6_3: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form6_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            group: 'Board of Directors', 
                            options6_4: [
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