<template>
    <div>
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
                                <b class="mb-3">1.1</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">คณะกรรมการและผู้บริหารกำหนดแนวทาง
                                            และมีการปฏิบัติที่อยู่บนหลักความซื่อตรงและการรักษาจรรยาบรรณในการดำเนินงานที่ครอบคลุมถึง<br>
                                            • การปฏิบัติหน้าที่ประจำวันและการตัดสินใจในเรื่องต่างๆ<br>
                                            • การปฏิบัติต่อคู่ค้า ลูกค้า และบุคคลภายนอก
                                        </label>
                                    </div>
                                    <b-row class="mt-5">
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form1.form1_1.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.2---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.2</b>
                                <b-col cols="6" class="">

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
                                    <b-row class="mt-5">
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Management</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form1.form1_2.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.3---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.3</b>
                                <b-col cols="6" class="">

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
                                    <b-row class="mt-5">
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Operation</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form1.form1_3.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------1.4---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">1.4</b>
                                <b-col cols="6" class="">

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
                                    <b-row class="mt-5">
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Operation</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form1.form1_4.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>
                    </b-collapse>
                </section>

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
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">มีการกำหนดบทบาทหน้าที่ของคณะกรรมการแยกจากฝ่ายบริหาร
                                            โดยได้สงวนสิทธิ์อำนาจเฉพาะของคณะกรรมการไว้อย่างชัดเจน</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_1.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_1.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_1.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------2.2---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">2.2</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label
                                            for="">คณะกรรมการบริษัทกำกับดูแลให้มีการกำหนดเป้าหมายการดำเนินธุรกิจที่ชัดเจนและวัดผลได้
                                            เพื่อเป็นแนวทางในการปฏิบัติงานของผู้บริหารและพนักงาน</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_2.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_2.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_2.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------2.3---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">2.3</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label
                                            for="">คณะกรรมการบริษัทกำกับดูแลให้บริษัทกำหนดบทบาทหน้าที่ของคณะกรรมการและผู้บริหารให้ถูกต้องตามกฎหมาย
                                            กฎบัตร ซึ่งครอบคลุมบทบาทที่สำคัญของคณะกรรมการตรวจสอบ ผู้สอบบัญชี
                                            ผู้ตรวจสอบภายใน
                                            และผู้รับผิดชอบต่อรายงานทางการเงิน</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_3.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_3.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_3.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------2.4---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">2.4</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">คณะกรรมการบริษัทเป็นผู้มีความรู้เกี่ยวกับธุรกิจของบริษัท
                                            และมีความเชี่ยวชาญที่เป็นประโยชน์ต่อบริษัท
                                            หรือสามารถขอคำแนะนำจากผู้เชี่ยวชาญในเรื่องนั้นๆได้</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_4.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_4.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_4.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------2.5---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">2.5</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">คณะกรรมการของบริษัทประกอบด้วยกรรมการอิสระที่มีความรู้
                                            ความสามารถน่าเชื่อถือ
                                            และมีความเป็นอิสระในการปฏิบัติหน้าที่อย่างแท้จริง เช่น
                                            ไม่มีความสัมพันธ์ทางธุรกิจกับบริษัท
                                            ไม่มีความสัมพันธ์อื่นใด
                                            อันอาจมีอิทธิพลต่อการใช้ดุลยพินิจและปฏิบัติหน้าที่อย่างเป็นอิสระ
                                            ในจำนวนที่เหมาะสมเพียงพอ</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_5.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_5.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_5.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------2.6---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">2.6</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label
                                            for="">คณะกรรมการบริษัทกำกับดูแลการพัฒนาและปฏิบัติเรื่องการควบคุมภายในในองค์กร
                                            ซึ่งครอบคลุมทั้งการสร้างสภาพแวดล้อมการควบคุม การประเมินความเสี่ยง
                                            กิจกรรมการควบคุม
                                            ข้อมูลและการสื่อสาร และการติดตาม</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form2.form2_6.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form2.form2_6.moderate :true-value=1
                                                        :false-value=0>
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
                                <b-col cols="5" class="">
                                    <b>กลุ่ม</b>
                                    <p class="form-details">Board of Directors</p>
                                    <b-row class="mt-5">
                                        <b>การดำเนินการในปัจจุบัน</b>
                                        <b-form-textarea rows="5"
                                            v-model="forms.form2.form2_6.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                        </div>
                    </b-collapse>
                </section>

                <!-- 3. -->
                <section class="mb-4">
                    <header class="d-flex">
                        <b-icon class="vue-icon" v-b-toggle.collapse-3 icon="arrow-down-right-square-fill"></b-icon>
                        <p>3. ฝ่ายบริหารได้จัดให้มีโครงสร้างสายการรายงาน
                            การกำหนดอำนาจในการสั่งการและความรับผิดชอบที่เหมาะสมเพื่อให้องค์กรบรรลุวัตถุประสงค์
                            ภายใต้การกำกับดูแล
                            (oversight) ของคณะกรรมการ</p>
                    </header>
                    <b-collapse id="collapse-3" class="mt-2">
                        <div class="container-form">
                            <!-----------3.1---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">3.1</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label
                                            for="">ผู้บริหารระดับสูงกำหนดโครงสร้างองค์กรที่สนับสนุนการบรรลุวัตถุประสงค์ของบริษัท
                                            โดยพิจารณาถึงความเหมาะสมทั้งทางธุรกิจและกฎหมาย
                                            รวมถึงการจัดให้มีการควบคุมภายในอย่างมีประสิทธิภาพ
                                            เช่น แบ่งแยกหน้าที่ในส่วนงานที่สำคัญ
                                            ซึ่งทำให้เกิดการตรวจสอบถ่วงดุลระหว่างกัน
                                            มีงานตรวจสอบภายในที่ขึ้นตรงกับกรรมการตรวจสอบ และมีสายการรายงานที่ชัดเจน
                                            เป็นต้น</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form3.form3_1.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form3.form3_1.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form3.form3_1.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form3.form3_1.aic
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
                                            v-model="forms.form3.form3_1.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------3.2---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">3.2</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">ผู้บริหารระดับสูงกำหนดสายการรายงานในบริษัท
                                            โดยพิจารณาถึงความเหมาะสมเกี่ยวกับอำนาจหน้าที่ ความรับผิดชอบ
                                            และการสื่อสารข้อมูล</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form3.form3_2.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form3.form3_2.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form3.form3_2.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form3.form3_2.aic
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
                                            v-model="forms.form3.form3_2.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                            <!-----------3.2---------->
                            <b-row class="mt-4 d-flex justify-content-between ">
                                <b class="mb-3">3.3</b>
                                <b-col cols="6" class="">

                                    <div class="form-offer">
                                        <label for="">มีการกำหนด มอบหมาย
                                            และจำกัดอำนาจหน้าที่และความรับผิดชอบอย่างเหมาะสมระหว่างคณะกรรมการบริษัท
                                            ผู้บริหารระดับสูง
                                            ผู้บริหาร และพนักงาน</label>
                                    </div>
                                    <b-row class="mt-5">
                                        <b>ระดับความสำคัญ</b>
                                        <div class="title-head-form d-flex">
                                            <div class="con-checkbox">
                                                <label class="container-box">สูง
                                                    <input type="checkbox" value="height"
                                                        v-model=forms.form3.form3_3.height :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color1"></span>
                                                </label>
                                                <label class="container-box">ปานกลาง
                                                    <input type="checkbox" value="moderate"
                                                        v-model=forms.form3.form3_3.moderate :true-value=1
                                                        :false-value=0>
                                                    <span class="checkmark checkbox-color2"></span>
                                                </label>
                                            </div>
                                            <div class="con-checkbox">
                                                <label class="container-box">ต่ำ
                                                    <input type="checkbox" value="low" v-model=forms.form3.form3_3.low
                                                        :true-value=1 :false-value=0>
                                                    <span class="checkmark checkbox-color3"></span>
                                                </label>
                                                <label class="container-box">AIC
                                                    <input type="checkbox" value="aic" v-model=forms.form3.form3_3.aic
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
                                            v-model="forms.form3.form3_3.currentAction"></b-form-textarea>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                        </div>
                    </b-collapse>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-report1',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form1: {
                        form1_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form1_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form1_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form1_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    },
                    form2: {
                        form2_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form2_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form2_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form2_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form2_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form2_6: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    },
                    form3: {
                        form3_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form3_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                        form3_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0
                        },
                    }
                }
            }
        }
    },
} 
</script>