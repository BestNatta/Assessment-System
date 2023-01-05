<template>
  <form action="#" @submit.prevent="onSubmit">
    <!-- <p v-if="errorsPresent" class="error text-center">กรุณากรอกข้อมูลให้ครบถ้วน !</p> -->
    <div class="container w-50">
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="calendar plus icon"></i>ชื่อบริษัท
        </div>
        <input type="text" placeholder="Enter task..." v-model="forms.company_name" />
      </div>
      <div class="ui form">
        <div class="ui label">
          <b-icon icon="book-half" scale="1"></b-icon> ส่วนที่ 4
        </div>
        <input type="text" placeholder="Enter Details" v-model="forms.chapter1" />
        <textarea rows="4" v-model="forms.description1"></textarea>
      </div>
      <div class="ui form mt-2">
        <div class="ui label">
          <b-icon icon="book-half" scale="1"></b-icon> ส่วนที่ 5
        </div>
        <input type="text" placeholder="Enter Details" v-model="forms.chapter2" />
        <textarea rows="4" v-model="forms.description2"></textarea>
      </div>
    </div>
    <hr />

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
                            <input type="checkbox" value="height" v-model=forms.form1.form1_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form1.form1_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form1.form1_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form1.form1_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form1.form1_1.currentAction"></b-form-textarea>
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
                        • มีข้อกำหนดเกี่ยวกับจริยธรรม (Code of conduct) สำหรับผู้บริหารและพนักงาน ที่เหมาะสม<br>
                        •
                        มีข้อกำหนดห้ามผู้บริหารและพนักงานปฏิบัติตนในลักษณะที่อาจก่อให้เกิดความขัดแย้งทางผลประโยชน์กับกิจการ
                        ซึ่งรวมถึงการห้ามคอร์รัปชั่นอันทำให้เกิดความเสียหายต่อองค์กร<br>
                        • มีบทลงโทษที่เหมาะสมหากมีการฝ่าฝืนข้อกำหนดข้างต้น<br>
                        • มีการสื่อสารข้อกำหนดและบทลงโทษข้างต้นให้ผู้บริหารและพนักงานทุกคนรับทราบ เช่น
                        รวมอยู่ในการปฐมนิเทศพนักงานใหม่ ให้พนักงานลงนามรับทราบข้อกำหนดและบทลงโทษเป็นประจำทุกปี
                        รวมทั้งมีการเผยแพร่ Code of conduct ให้แก่พนักงานและบุคคลภายนอกได้รับทราบ

                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form1.form1_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form1.form1_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form1.form1_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form1.form1_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form1.form1_2.currentAction"></b-form-textarea>
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
                        • การติดตามและประเมินผลโดยหน่วยงานตรวจสอบภายในหรือหน่วยงานกำกับดูแลการปฏิบัติ (compliance unit)
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
                            <input type="checkbox" value="height" v-model=forms.form1.form1_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form1.form1_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form1.form1_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form1.form1_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form1.form1_3.currentAction"></b-form-textarea>
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
                        • มีกระบวนการที่ทำให้สามารถลงโทษหรือจัดการกับการฝ่าฝืนได้อย่างเหมาะสม และภายในเวลาอันควร <br>
                        • มีการแก้ไขการกระทำที่ขัดต่อหลักความซื่อตรงและการรักษาจรรยาบรรณอย่างเหมาะสม และภายในเวลาอันควร
                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form1.form1_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form1.form1_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form1.form1_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form1.form1_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form1.form1_4.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form2.form2_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------2.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">2.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการบริษัทกำกับดูแลให้มีการกำหนดเป้าหมายการดำเนินธุรกิจที่ชัดเจนและวัดผลได้
                        เพื่อเป็นแนวทางในการปฏิบัติงานของผู้บริหารและพนักงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form2.form2_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_2.currentAction"></b-form-textarea>
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
                        กฎบัตร ซึ่งครอบคลุมบทบาทที่สำคัญของคณะกรรมการตรวจสอบ ผู้สอบบัญชี ผู้ตรวจสอบภายใน
                        และผู้รับผิดชอบต่อรายงานทางการเงิน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form2.form2_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_3.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form2.form2_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------2.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">2.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการของบริษัทประกอบด้วยกรรมการอิสระที่มีความรู้ ความสามารถน่าเชื่อถือ
                        และมีความเป็นอิสระในการปฏิบัติหน้าที่อย่างแท้จริง เช่น ไม่มีความสัมพันธ์ทางธุรกิจกับบริษัท
                        ไม่มีความสัมพันธ์อื่นใด อันอาจมีอิทธิพลต่อการใช้ดุลยพินิจและปฏิบัติหน้าที่อย่างเป็นอิสระ
                        ในจำนวนที่เหมาะสมเพียงพอ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form2.form2_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------2.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">2.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการบริษัทกำกับดูแลการพัฒนาและปฏิบัติเรื่องการควบคุมภายในในองค์กร
                        ซึ่งครอบคลุมทั้งการสร้างสภาพแวดล้อมการควบคุม การประเมินความเสี่ยง กิจกรรมการควบคุม
                        ข้อมูลและการสื่อสาร และการติดตาม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form2.form2_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form2.form2_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form2.form2_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form2.form2_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form2.form2_6.currentAction"></b-form-textarea>
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
                การกำหนดอำนาจในการสั่งการและความรับผิดชอบที่เหมาะสมเพื่อให้องค์กรบรรลุวัตถุประสงค์ ภายใต้การกำกับดูแล
                (oversight) ของคณะกรรมการ</p>
            </header>
            <b-collapse id="collapse-3" class="mt-2">
              <div class="container-form">
                <!-----------3.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">3.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">ผู้บริหารระดับสูงกำหนดโครงสร้างองค์กรที่สนับสนุนการบรรลุวัตถุประสงค์ของบริษัท
                        โดยพิจารณาถึงความเหมาะสมทั้งทางธุรกิจและกฎหมาย รวมถึงการจัดให้มีการควบคุมภายในอย่างมีประสิทธิภาพ
                        เช่น แบ่งแยกหน้าที่ในส่วนงานที่สำคัญ ซึ่งทำให้เกิดการตรวจสอบถ่วงดุลระหว่างกัน
                        มีงานตรวจสอบภายในที่ขึ้นตรงกับกรรมการตรวจสอบ และมีสายการรายงานที่ชัดเจน เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form3.form3_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form3.form3_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form3.form3_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form3.form3_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form3.form3_1.currentAction"></b-form-textarea>
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
                        โดยพิจารณาถึงความเหมาะสมเกี่ยวกับอำนาจหน้าที่ ความรับผิดชอบ และการสื่อสารข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form3.form3_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form3.form3_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form3.form3_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form3.form3_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form3.form3_2.currentAction"></b-form-textarea>
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
                        และจำกัดอำนาจหน้าที่และความรับผิดชอบอย่างเหมาะสมระหว่างคณะกรรมการบริษัท ผู้บริหารระดับสูง
                        ผู้บริหาร และพนักงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form3.form3_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form3.form3_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form3.form3_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form3.form3_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form3.form3_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

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
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีนโยบายและวิธีการปฏิบัติเพื่อจัดหา พัฒนา
                        และรักษาบุคลากรที่มีความรู้ความสามารถที่เหมาะสม
                        และมีกระบวนการสอบทานนโยบายและวิธีการปฏิบัตินั้นอย่างสม่ำเสมอ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form4.form4_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form4.form4_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form4.form4_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form4.form4_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form4.form4_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------4.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">4.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีกระบวนการประเมินผลการปฏิบัติงาน
                        การให้แรงจูงใจหรือรางวัลต่อบุคลากรที่มีผลการปฏิบัติงานดี
                        และการจัดการต่อบุคลากรที่มีผลงานไม่บรรลุเป้าหมาย รวมถึง
                        การสื่อสารกระบวนการเหล่านี้ให้ผู้บริหารและพนักงานทราบ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form4.form4_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form4.form4_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form4.form4_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form4.form4_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form4.form4_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------4.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">4.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">บริษัทมีกระบวนการแก้ไขปัญหาหรือเตรียมพร้อมสำหรับการขาดบุคลากรที่มีความรู้และความสามารถที่เหมาะสมอย่างทันเวลา</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form4.form4_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form4.form4_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form4.form4_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form4.form4_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form4.form4_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------4.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">4.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีกระบวนการสรรหา พัฒนา และรักษาผู้บริหารและพนักงานทุกคน เช่น การจัดระบบที่ปรึกษา
                        (mentoring) และการฝึกอบรม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form4.form4_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form4.form4_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form4.form4_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form4.form4_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form4.form4_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------4.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">4.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีแผนและกระบวนการสรรหาผู้สืบทอดตำแหน่ง (Successor plan) ที่สำคัญ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form4.form4_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form4.form4_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form4.form4_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form4.form4_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form4.form4_5.currentAction"></b-form-textarea>
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
              <p>5. องค์กรกำหนดให้บุคลากรมีหน้าที่และความรับผิดชอบในการควบคุมภายใน เพื่อให้บรรลุตามวัตถุประสงค์ขององค์กร</p>
            </header>
            <b-collapse id="collapse-5" class="mt-2">
              <div class="container-form">
                <!-----------5.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">5.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">คณะกรรมการบริษัทและผู้บริหารมีกระบวนการและการสื่อสารเชิงบังคับให้บุคลากรทุกคนมีความรับผิดชอบต่อการควบคุมภายใน
                        และจัดให้มีการปรับปรุงแก้ไขกระบวนการปฏิบัติในกรณีที่จำเป็น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form5.form5_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form5.form5_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form5.form5_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form5.form5_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form5.form5_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------5.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">5.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการบริษัทและผู้บริหารกำหนดตัวชี้วัดผลการปฏิบัติงาน การสร้างแรงจูงใจ
                        และการให้รางวัล ที่เหมาะสม โดยพิจารณาทั้งเรื่องการปฏิบัติตาม Code of conduct
                        และวัตถุประสงค์ในระยะสั้นและระยะยาวของบริษัท</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form5.form5_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form5.form5_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form5.form5_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form5.form5_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form5.form5_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------5.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">5.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">คณะกรรมการบริษัทและผู้บริหารประเมินแรงจูงใจและการให้รางวัลอย่างต่อเนื่องโดยเน้นให้สามารถเชื่อมโยงกับความสำเร็จของหน้าที่ในการปฏิบัติตามการควบคุมภายในด้วย</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form5.form5_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form5.form5_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form5.form5_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form5.form5_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form5.form5_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------5.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">5.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">คณะกรรมการบริษัทและผู้บริหารได้พิจารณาไม่ให้มีการสร้างแรงกดดันที่มากเกินไปในการปฏิบัติหน้าที่ของบุคลากรแต่ละคน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form5.form5_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form5.form5_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form5.form5_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form5.form5_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form5.form5_4.currentAction"></b-form-textarea>
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
              <p>6. องค์กรกำหนดวัตถุประสงค์ไว้อย่างชัดเจนเพียงพอ เพื่อให้สามารถระบุและประเมินความเสี่ยงต่าง ๆ ที่เกี่ยวข้องกับการบรรลุวัตถุประสงค์ขององค์กร</p>
            </header>
            <b-collapse id="collapse-6" class="mt-2">
              <div class="container-form">
                <!-----------6.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">6.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">บริษัทสามารถปฏิบัติตามมาตรฐานการบัญชีที่รับรองโดยทั่วไป และเหมาะสมกับธุรกิจในขณะนั้น โดยแสดงได้ว่ารายการในรายงานทางการเงินมีตัวตนจริง ครบถ้วน แสดงถึงสิทธิหรือภาระผูกพันของบริษัทได้ถูกต้อง มีมูลค่าเหมาะสม และเปิดเผยข้อมูลครบถ้วน ถูกต้อง</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form6.form6_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form6.form6_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form6.form6_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form6.form6_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form6.form6_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------6.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">6.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดสาระสำคัญของรายการทางการเงิน โดยพิจารณาถึงปัจจัยที่สำคัญ เช่น ผู้ใช้รายงานทางการเงิน ขนาดของรายการ แนวโน้มของธุรกิจ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form6.form6_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form6.form6_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form6.form6_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form6.form6_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form6.form6_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------6.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">6.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">รายงานทางการเงินของบริษัทสะท้อนถึงกิจกรรมการดำเนินงานของบริษัทอย่างแท้จริง</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form6.form6_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form6.form6_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form6.form6_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form6.form6_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form6.form6_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------6.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">6.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการหรือคณะกรรมการบริหารความเสี่ยง อนุมัติและสื่อสารนโยบายการบริหารความเสี่ยงให้ผู้บริหารและพนักงานทุกคนรับทราบและถือปฏิบัติ จนเป็นส่วนหนึ่งของวัฒนธรรมขององค์กร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form6.form6_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form6.form6_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form6.form6_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form6.form6_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form6.form6_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 7. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-7 icon="arrow-down-right-square-fill"></b-icon>
              <p>7. องค์กรระบุและวิเคราะห์ความเสี่ยงทุกประเภทที่อาจกระทบต่อการบรรลุวัตถุประสงค์ไว้อย่างครอบคลุมทั่วทั้งองค์กร</p>
            </header>
            <b-collapse id="collapse-7" class="mt-2">
              <div class="container-form">
                <!-----------7.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">7.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label
                        for="">บริษัทระบุความเสี่ยงทุกประเภทซึ่งอาจมีผลกระทบต่อการดำเนินธุรกิจทั้งระดับองค์กร หน่วยธุรกิจ ฝ่ายงาน และหน้าที่งานต่างๆ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form7.form7_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form7.form7_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form7.form7_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form7.form7_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form7.form7_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------7.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">7.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทวิเคราะห์ความเสี่ยงทุกประเภทที่อาจเกิดจากทั้งปัจจัยภายในและปัจจัยภายนอกองค์กร ซึ่งรวมถึงความเสี่ยงด้านกลยุทธ์ การดำเนินงาน การรายงาน การปฏิบัติตามกฎเกณฑ์ และด้านเทคโนโลยีสารสนเทศ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form7.form7_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form7.form7_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form7.form7_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form7.form7_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form7.form7_2.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form7.form7_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form7.form7_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form7.form7_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form7.form7_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form7.form7_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------7.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">7.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทได้ประเมินความสำคัญของความเสี่ยง โดยพิจารณาทั้งโอกาสเกิดเหตุการณ์ และผลกระทบที่อาจเกิดขึ้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form7.form7_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form7.form7_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form7.form7_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form7.form7_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form7.form7_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------7.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">7.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีมาตรการและแผนปฏิบัติงานเพื่อจัดการความเสี่ยง โดยอาจเป็นการยอมรับความเสี่ยงนั้น (acceptance) การลดความเสี่ยง (reduction) การหลีกเลี่ยงความเสี่ยง (avoidance) หรือการร่วมรับความเสี่ยง (sharing)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form7.form7_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form7.form7_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form7.form7_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form7.form7_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form7.form7_5.currentAction"></b-form-textarea>
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
              <p>8. องค์กรได้พิจารณาถึงโอกาสที่จะเกิดการทุจริต ในการประเมินความเสี่ยงที่จะบรรลุวัตถุประสงค์ขององค์กร</p>
            </header>
            <b-collapse id="collapse-8" class="mt-2">
              <div class="container-form">
                <!-----------8.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">8.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทประเมินโอกาสที่จะเกิดการทุจริตขึ้น โดยครอบคลุมการทุจริตแบบต่างๆ เช่น การจัดทำรายงานทางการเงินเท็จ การทำให้สูญเสียทรัพย์สิน การคอร์รัปชั่น การที่ผู้บริหารสามารถฝ่าฝืนระบบควบคุมภายใน (Management override of internal controls) การเปลี่ยนแปลงข้อมูลในรายงานที่สำคัญ การได้มาหรือใช้ไปซึ่งทรัพย์สินโดยไม่ถูกต้อง เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form8.form8_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form8.form8_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form8.form8_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form8.form8_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form8.form8_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------8.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">8.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทได้ทบทวนเป้าหมายการปฏิบัติงานอย่างรอบคอบ โดยพิจารณาความเป็นไปได้ของเป้าหมายที่กำหนดแล้ว รวมทั้งได้พิจารณาความสมเหตุสมผลของการให้สิ่งจูงใจหรือผลตอบแทนแก่พนักงานแล้วด้วยว่า ไม่มีลักษณะส่งเสริมให้พนักงานกระทำไม่เหมาะสม เช่น ไม่ตั้งเป้าหมายยอดขายของบริษัทไว้สูงเกินความเป็นจริงจนทำให้เกิดแรงจูงใจในการตกแต่งตัวเลขยอดขาย เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form8.form8_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form8.form8_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form8.form8_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form8.form8_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form8.form8_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------8.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">8.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">คณะกรรมการตรวจสอบได้พิจารณาและสอบถามผู้บริหารเกี่ยวกับโอกาสในการเกิดทุจริต และมาตรการที่บริษัทดำเนินการเพื่อป้องกันหรือแก้ไขการทุจริต</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form8.form8_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form8.form8_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form8.form8_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form8.form8_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form8.form8_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------8.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">8.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทได้สื่อสารให้พนักงานทุกคนเข้าใจและปฏิบัติตามนโยบายและแนวปฏิบัติที่กำหนดไว้</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form8.form8_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form8.form8_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form8.form8_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form8.form8_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form8.form8_4.currentAction"></b-form-textarea>
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
                      <label for="">บริษัทประเมินการเปลี่ยนแปลงปัจจัยภายนอกองค์กรที่อาจมีผลกระทบต่อการดำเนินธุรกิจ การควบคุมภายใน และรายงานทางการเงิน ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form9.form9_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form9.form9_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form9.form9_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form9.form9_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form9.form9_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------9.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">9.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทประเมินการเปลี่ยนแปลงรูปแบบการทำธุรกิจที่อาจมีผลกระทบต่อการดำเนินธุรกิจ การควบคุมภายใน และรายงานทางการเงิน ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form9.form9_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form9.form9_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form9.form9_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form9.form9_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form9.form9_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------9.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">9.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทประเมินการเปลี่ยนแปลงผู้นำองค์กรที่อาจมีผลกระทบต่อการดำเนินธุรกิจ การควบคุมภายใน และรายงานทางการเงิน ตลอดจนได้กำหนดมาตรการตอบสนองต่อการเปลี่ยนแปลงนั้นอย่างเพียงพอแล้ว</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form9.form9_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form9.form9_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form9.form9_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form9.form9_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form9.form9_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 10. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-10 icon="arrow-down-right-square-fill"></b-icon>
              <p>10. องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กร ให้อยู่ในระดับที่ยอมรับได้</p>
            </header>
            <b-collapse id="collapse-10" class="mt-2">
              <div class="container-form">
                <!-----------10.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">10.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">มาตรการควบคุมของบริษัทมีความเหมาะสมกับความเสี่ยง และลักษณะเฉพาะขององค์กร เช่น สภาพแวดล้อม ความซับซ้อนของงาน ลักษณะงาน ขอบเขตการดำเนินงาน รวมถึงลักษณะเฉพาะอื่น ๆ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form10.form10_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form10.form10_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form10.form10_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form10.form10_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form10.form10_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------10.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">10.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีมาตรการควบคุมภายในที่กำหนดเป็นลายลักษณ์อักษร และครอบคลุมกระบวนการต่างๆ อย่างเหมาะสม เช่น มีนโยบายและระเบียบวิธีปฏิบัติงานเกี่ยวกับธุรกรรมด้านการเงินการจัดซื้อ และการบริหารทั่วไป ตลอดจนกำหนดขอบเขต อำนาจหน้าที่ และลำดับชั้นการอนุมัติของผู้บริหารในแต่ละระดับไว้อย่างชัดเจน รัดกุม เพื่อให้สามารถป้องกันการทุจริตได้ เช่น มีการกำหนดขนาดวงเงินและอำนาจอนุมัติของผู้บริหารแต่ละระดับ ขั้นตอนในการอนุมัติโครงการลงทุน ขั้นตอนการจัดซื้อและวิธีการคัดเลือกผู้ขาย การบันทึกข้อมูลรายละเอียดการตัดสินใจจัดซื้อ ขั้นตอนการเบิกจ่ายวัสดุอุปกรณ์ หรือ การเบิกใช้เครื่องมือต่างๆ เป็นต้น โดยได้จัดให้มีกระบวนการสำหรับกรณีต่าง ๆ ดังนี้<br>
                        •	การเก็บรวบรวมข้อมูลเกี่ยวกับผู้ถือหุ้นรายใหญ่ กรรมการ ผู้บริหาร และผู้ที่เกี่ยวข้องกับบุคคลดังกล่าว รวมทั้งบุคคลที่เกี่ยวโยงกัน เพื่อประโยชน์ในการติดตามและสอบทานการทำรายการระหว่างกัน หรือรายการที่อาจมีความขัดแย้งทางผลประโยชน์ รวมทั้งมีการปรับปรุงข้อมูลให้เป็นปัจจุบันเสมอ <br>
                        •	กรณีที่บริษัทอนุมัติธุรกรรมหรือทำสัญญากับผู้ที่เกี่ยวข้องในลักษณะที่มีผลผูกพันบริษัทในระยะยาวไปแล้ว เช่น การทำสัญญาซื้อขายสินค้า การให้กู้ยืม การค้ำประกัน บริษัทได้ติดตามให้มั่นใจแล้วว่า มีการปฏิบัติเป็นไปตามเงื่อนไขที่ตกลงกันไว้ตลอดระยะเวลาที่มีผลผูกพันบริษัท เช่น ติดตามการชำระคืนหนี้ตามกำหนด มีการทบทวนความเหมาะสมของสัญญา เป็นต้น
                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form10.form10_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form10.form10_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form10.form10_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form10.form10_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form10.form10_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------10.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">10.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดให้การควบคุมภายในมีความหลากหลายอย่างเหมาะสม เช่น การควบคุมแบบ manual และ automated หรือการควบคุมแบบป้องกันและติดตาม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form10.form10_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form10.form10_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form10.form10_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form10.form10_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form10.form10_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------10.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">10.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดให้มีการควบคุมภายในในทุกระดับขององค์กร เช่น ทั้งระดับกลุ่มบริษัท หน่วยธุรกิจ สายงาน ฝ่ายงาน แผนก หรือกระบวนการ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form10.form10_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form10.form10_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form10.form10_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form10.form10_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form10.form10_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------10.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">10.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีการแบ่งแยกหน้าที่ความรับผิดชอบในงาน 3 ด้านต่อไปนี้ ออกจากกันโดยเด็ดขาด เพื่อเป็นการตรวจสอบซึ่งกันและกัน กล่าวคือ <br>
                      (1) หน้าที่อนุมัติ <br>
                      (2) หน้าที่บันทึกรายการบัญชีและข้อมูลสารสนเทศ <br>
                      (3) หน้าที่ในการดูแลจัดเก็บทรัพย์สิน
                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form10.form10_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form10.form10_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form10.form10_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form10.form10_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form10.form10_5.currentAction"></b-form-textarea>
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
              <p>11. องค์กรเลือกและพัฒนากิจกรรมการควบคุมทั่วไปด้วยระบบเทคโนโลยี เพื่อช่วยสนับสนุนการบรรลุวัตถุประสงค์</p>
            </header>
            <b-collapse id="collapse-11" class="mt-2">
              <div class="container-form">
                <!-----------11.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">11.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทควรกำหนดความเกี่ยวข้องกันระหว่างการใช้เทคโนโลยีสารสนเทศ ในกระบวนการปฏิบัติงานและการควบคุมทั่วไปของระบบสารสนเทศ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form11.form11_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form11.form11_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form11.form11_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form11.form11_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form11.form11_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------11.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">11.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทควรกำหนดการควบคุมของโครงสร้างพื้นฐานของระบบเทคโนโลยีให้มีความเหมาะสม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form11.form11_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form11.form11_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form11.form11_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form11.form11_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form11.form11_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------11.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">11.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทควรกำหนดการควบคุมด้านความปลอดภัยของระบบเทคโนโลยีให้มีความเหมาะสม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form11.form11_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form11.form11_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form11.form11_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form11.form11_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form11.form11_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------11.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">11.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทควรกำหนดการควบคุมกระบวนการได้มา การพัฒนา และการบำรุงรักษาระบบเทคโนโลยีให้มีความเหมาะสม</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form11.form11_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form11.form11_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form11.form11_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form11.form11_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form11.form11_4.currentAction"></b-form-textarea>
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
              <p>12. องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</p>
            </header>
            <b-collapse id="collapse-12" class="mt-2">
              <div class="container-form">
                <!-----------12.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีนโยบายที่รัดกุมเพื่อติดตามให้การทำธุรกรรมของผู้ถือหุ้นรายใหญ่ กรรมการ ผู้บริหาร หรือผู้ที่เกี่ยวข้องกับบุคคลดังกล่าว ต้องผ่านขั้นตอนการอนุมัติที่กำหนด เช่น ข้อบังคับของบริษัท เกณฑ์ของตลาดหลักทรัพย์แห่งประเทศไทยเกณฑ์ของสำนักงาน –ก.ล.ต. เพื่อป้องกันการหาโอกาสหรือนำผลประโยชน์ของบริษัทไปใช้ส่วนตัว</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีนโยบายเพื่อให้การพิจารณาอนุมัติธุรกรรมกระทำโดยผู้ที่ไม่มีส่วนได้เสียในธุรกรรมนั้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีนโยบายเพื่อให้การพิจารณาอนุมัติธุรกรรมคำนึงถึงประโยชน์สูงสุดของบริษัทเป็นสำคัญ และพิจารณาโดยถือเสมือนเป็นรายการที่กระทำกับบุคคลภายนอก (At arms’ length basis)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีกระบวนการติดตามดูแลการดำเนินงานของบริษัทย่อยหรือบริษัทร่วม รวมทั้งกำหนดแนวทางให้บุคคลที่บริษัทแต่งตั้งให้เป็นกรรมการหรือผู้บริหาร ในบริษัทย่อยหรือร่วมนั้นถือปฏิบัติ (หากบริษัทไม่มีเงินลงทุนในบริษัทย่อยหรือบริษัทร่วมไม่ต้องตอบข้อนี้)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดหน้าที่และความรับผิดชอบในการนำนโยบายและกระบวนการไปปฏิบัติโดยผู้บริหารและพนักงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและกระบวนการปฏิบัติของบริษัทได้รับการนำไปใช้ในเวลาที่เหมาะสม โดยบุคลากรที่มีความสามารถรวมถึงการครอบคลุมกระบวนการแก้ไขข้อผิดพลาด ในการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_6.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------12.7---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">12.7</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัททบทวนนโยบายและกระบวนการปฏิบัติให้มีความเหมาะสมอยู่เสมอ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form12.form12_7.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form12.form12_7.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form12.form12_7.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form12.form12_7.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form12.form12_7.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 13. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-13 icon="arrow-down-right-square-fill"></b-icon>
              <p>13. องค์กรข้อมูลที่เกี่ยวข้องและมีคุณภาพ เพื่อสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่กำหนดไว้</p>
            </header>
            <b-collapse id="collapse-13" class="mt-2">
              <div class="container-form">
                <!-----------13.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดข้อมูลที่ต้องการใช้ในการดำเนินงาน ทั้งข้อมูลจากภายในและภายนอกองค์กรที่มีคุณภาพและเกี่ยวข้องต่องาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------13.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทพิจารณาทั้งต้นทุนและประโยชน์ที่จะได้รับ รวมถึงปริมาณและความถูกต้องของข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------13.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทดำเนินการเพื่อให้คณะกรรมการมีข้อมูลที่สำคัญอย่างเพียงพอสำหรับใช้ประกอบการตัดสินใจ ตัวอย่างข้อมูลที่สำคัญ เช่น รายละเอียดของเรื่องที่เสนอให้พิจารณา เหตุผล ผลกระทบต่อบริษัท</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------13.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทดำเนินการเพื่อให้กรรมการบริษัทได้รับหนังสือนัดประชุมหรือเอกสารประกอบการประชุมที่ระบุข้อมูลที่จำเป็นและเพียงพอต่อการพิจารณาก่อนการประชุมล่วงหน้าอย่างน้อยภายในระยะเวลาขั้นต่ำตามที่กฎหมายกำหนด</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------13.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทดำเนินการเพื่อให้รายงานการประชุมคณะกรรมการมีรายละเอียดตามควรเพื่อให้สามารถตรวจสอบย้อนหลังเกี่ยวกับความเหมาะสมในการปฏิบัติหน้าที่ของกรรมการแต่ละราย เช่น การบันทึกข้อซักถามของกรรมการ ความเห็นหรือข้อสังเกตของกรรมการในเรื่องที่พิจารณา ความเห็นของกรรมการรายที่ไม่เห็นด้วยกับเรื่องที่เสนอพร้อมเหตุผล เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------13.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">13.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีการดำเนินการดังต่อไปนี้ <br>
                      •	มีการจัดเก็บเอกสารสำคัญ ไว้อย่างครบถ้วนเป็นหมวดหมู่ <br>
                      •	กรณีที่ได้รับแจ้งจากผู้สอบบัญชีหรือผู้ตรวจสอบภายในว่ามีข้อบกพร่องในการควบคุมภายใน บริษัทได้แก้ไขข้อบกพร่องนั้นอย่างครบถ้วนแล้ว
                      เช่น การบันทึกข้อซักถามของกรรมการ ความเห็นหรือข้อสังเกตของกรรมการในเรื่องที่พิจารณา ความเห็นของกรรมการรายที่ไม่เห็นด้วยกับเรื่องที่เสนอพร้อมเหตุผล เป็นต้น
                    </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form13.form13_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form13.form13_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form13.form13_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form13.form13_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form13.form13_6.currentAction"></b-form-textarea>
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
              <p>14. องค์กรสื่อสารข้อมูลภายในองค์กร ซึ่งรวมถึงวัตถุประสงค์และความรับผิดชอบต่อการควบคุมภายในที่จำเป็นต่อการสนับสนุนให้การควบคุมภายในสามารถดำเนินไปได้ตามที่วางไว้</p>
            </header>
            <b-collapse id="collapse-14" class="mt-2">
              <div class="container-form">
                <!-----------14.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">14.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีกระบวนการสื่อสารข้อมูลภายในอย่างมีประสิทธิภาพ และมีช่องทางการสื่อสารที่เหมาะสม เพื่อสนับสนุนการควบคุมภายใน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form14.form14_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form14.form14_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form14.form14_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form14.form14_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form14.form14_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------14.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">14.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีการรายงานข้อมูลที่สำคัญถึงคณะกรรมการบริษัทอย่างสม่ำเสมอ และคณะกรรมการบริษัทสามารถเข้าถึงแหล่งสารสนเทศที่จำเป็นต่อการปฏิบัติงาน หรือสอบทานรายการต่างๆ ตามที่ต้องการ เช่น การกำหนดบุคคลที่เป็นศูนย์ติดต่อ
                      เพื่อให้สามารถติดต่อขอข้อมูลอื่นนอกจากที่ได้รับจากผู้บริหาร รวมทั้งการติดต่อสอบถามข้อมูลจากผู้สอบบัญชี ผู้ตรวจสอบภายใน การจัดประชุมระหว่างคณะกรรมการและผู้บริหารตามที่คณะกรรมการร้องขอ การจัดกิจกรรมพบปะหารือระหว่างคณะกรรมการและผู้บริหารนอกเหนือจากการประชุมคณะกรรมการ เป็นต้น
                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form14.form14_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form14.form14_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form14.form14_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form14.form14_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form14.form14_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------14.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">14.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทจัดให้มีช่องทางการสื่อสารพิเศษหรือช่องทางลับเพื่อให้บุคคลต่าง ๆ ภายในบริษัทสามารถแจ้งข้อมูลหรือเบาะแสเกี่ยวกับการฉ้อฉลหรือทุจริตภายในบริษัท (whistle-blower hotline) ได้อย่างปลอดภัย</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form14.form14_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form14.form14_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form14.form14_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form14.form14_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form14.form14_3.currentAction"></b-form-textarea>
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
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีกระบวนการสื่อสารข้อมูลกับผู้มีส่วนได้เสียภายนอกองค์กรอย่างมีประสิทธิภาพ และมีช่องทางการสื่อสารที่เหมาะสม เพื่อสนับสนุนการควบคุมภายใน เช่น จัดให้มีเจ้าหน้าที่หรือหน่วยงานนักลงทุนสัมพันธ์ ศูนย์รับเรื่องร้องเรียน เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form15.form15_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form15.form15_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form15.form15_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form15.form15_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form15.form15_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------15.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">15.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทจัดให้มีช่องทางการสื่อสารพิเศษหรือช่องทางลับเพื่อให้ผู้มีส่วนได้เสียภายนอกองค์กรสามารถแจ้งข้อมูลหรือเบาะแสเกี่ยวกับการฉ้อฉลหรือทุจริต(whistle-blower hotline) แก่บริษัทได้อย่างปลอดภัย</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form15.form15_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form15.form15_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form15.form15_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form15.form15_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form15.form15_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 16. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-16 icon="arrow-down-right-square-fill"></b-icon>
              <p>16. องค์กรติดตามและประเมินผลการควบคุมภายใน เพื่อให้มั่นใจได้ว่าการควบคุมภายในยังดำเนินไปอย่างครบถ้วน เหมาะสม</p>
            </header>
            <b-collapse id="collapse-16" class="mt-2">
              <div class="container-form">
                <!-----------16.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทจัดให้มีกระบวนการติดตามการปฏิบัติตามจริยธรรมธุรกิจและข้อกำหนดห้ามฝ่ายบริหารและพนักงานปฏิบัติตนในลักษณะที่อาจก่อให้เกิดความขัดแย้งทางผลประโยชน์ เช่น กำหนดให้แต่ละส่วนงานติดตามการปฏิบัติ และรายงานผู้บังคับบัญชา หรือมอบหมายให้หน่วยงานตรวจสอบภายในติดตามการปฏิบัติ และรายงานต่อคณะกรรมการตรวจสอบ เป็นต้น</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------16.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทจัดให้มีการตรวจสอบการปฏิบัติตามระบบการควบคุมภายในที่วางไว้ โดยการประเมินตนเอง และ/หรือการประเมินอิสระโดยผู้ตรวจสอบภายใน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------16.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">ความถี่ในการติดตามและประเมินผลมีความเหมาะสมกับการเปลี่ยนแปลงของบริษัท</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------16.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">ดำเนินการติดตามและประเมินผลระบบการควบคุมภายใน โดยผู้ที่มีความรู้และความสามารถ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------16.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทกำหนดแนวทางการรายงานผลการตรวจสอบภายในให้ขึ้นตรงต่อคณะกรรมการตรวจสอบ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------16.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">16.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทส่งเสริมให้ผู้ตรวจสอบภายในปฏิบัติหน้าที่ตามมาตรฐานสากลการปฏิบัติงานวิชาชีพการตรวจสอบภายใน (International Standards for the Professional Practice of Internal Auditing)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form16.form16_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form16.form16_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form16.form16_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form16.form16_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form16.form16_6.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 17. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-17 icon="arrow-down-right-square-fill"></b-icon>
              <p>17. องค์กรประเมินและสื่อสารข้อบกพร่องของการควบคุมภายในอย่างทันเวลาต่อบุคคลที่รับผิดชอบ ซึ่งรวมถึงผู้บริหารระดับสูงและคณะกรรมการตามความเหมาะสม</p>
            </header>
            <b-collapse id="collapse-17" class="mt-2">
              <div class="container-form">
                <!-----------17.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">17.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทประเมินผลและสื่อสารข้อบกพร่องของการควบคุมภายใน และดำเนินการเพื่อติดตามแก้ไขอย่างทันท่วงที หากผลการดำเนินงานที่เกิดขึ้นแตกต่างจากเป้าหมายที่กำหนดไว้อย่างมีนัยสำคัญ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form17.form17_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form17.form17_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form17.form17_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form17.form17_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form17.form17_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------17.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">17.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">บริษัทมีนโยบายการรายงาน ดังนี้ <br>
                      •	ฝ่ายบริหารต้องรายงานต่อคณะกรรมการบริษัทโดยพลัน ในกรณีที่เกิดเหตุการณ์หรือสงสัยว่ามีเหตุการณ์ทุจริตอย่างร้ายแรง มีการปฏิบัติที่ฝ่าฝืนกฎหมาย หรือมีการกระทำที่ผิดปกติอื่น ซึ่งอาจกระทบต่อชื่อเสียงและฐานะการเงินของบริษัทอย่างมีนัยสำคัญ <br>
                      •	รายงานข้อบกพร่องที่เป็นสาระสำคัญ พร้อมแนวทางการแก้ไขปัญหา (แม้ว่าจะได้เริ่มดำเนินการจัดการแล้ว) ต่อคณะกรรมการบริษัท/คณะกรรมการตรวจสอบ เพื่อพิจารณาภายในระยะเวลาอันควร <br>
                      •	รายงานความคืบหน้าในการปรับปรุงข้อบกพร่องที่เป็นสาระสำคัญต่อคณะกรรมการบริษัท/คณะกรรมการตรวจสอบ
                      </label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form17.form17_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form17.form17_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form17.form17_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form17.form17_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form17.form17_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <b-row class="my-5">
            <b-col class="text-center">
              <h4><u>การควบคุมภายในระดับกระบวนปฏิบัติงาน</u></h4>
            </b-col>
          </b-row>

          <!-- 18. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-18 icon="arrow-down-right-square-fill"></b-icon>
              <p>18. กระบวนการขายและรับชำระเงิน</p>
            </header>
            <b-collapse id="collapse-18" class="mt-2">
              <div class="container-form">
                <!-----------18.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------18.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การบริหารจัดการฐานข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------18.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">ระยะเวลาและวงเงินสินเชื่อ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------18.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">กําหนดราคา</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------18.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การติดตามทวงหนี้</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------18.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">18.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การรับข้อร้องเรียน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form18.form18_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form18.form18_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form18.form18_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form18.form18_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form18.form18_6.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

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
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form19.form19_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form19.form19_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form19.form19_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form19.form19_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form19.form19_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------19.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">19.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การขอซื้อ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form19.form19_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form19.form19_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form19.form19_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form19.form19_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form19.form19_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------19.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">19.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การเปรียบเทียบและคัดเลือกผู้ขาย</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form19.form19_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form19.form19_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form19.form19_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form19.form19_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form19.form19_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------19.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">19.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การบริหารจัดการฐานข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form19.form19_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form19.form19_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form19.form19_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form19.form19_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form19.form19_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 20. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-20 icon="arrow-down-right-square-fill"></b-icon>
              <p>20. กระบวนการบริหารสินค้าคงคลัง</p>
            </header>
            <b-collapse id="collapse-20" class="mt-2">
              <div class="container-form">
                <!-----------20.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">20.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form20.form20_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form20.form20_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form20.form20_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form20.form20_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form20.form20_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------20.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">20.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การบริหารจัดการฐานข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form20.form20_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form20.form20_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form20.form20_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form20.form20_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form20.form20_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------20.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">20.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การดูแลฐานข้อมูล</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form20.form20_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form20.form20_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form20.form20_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form20.form20_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form20.form20_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 21. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-21 icon="arrow-down-right-square-fill"></b-icon>
              <p>21. กระบวนการบริหารสินทรัพย์ถาวร</p>
            </header>
            <b-collapse id="collapse-21" class="mt-2">
              <div class="container-form">
                <!-----------21.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">21.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form21.form21_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form21.form21_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form21.form21_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form21.form21_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form21.form21_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------21.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">21.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การได้มาซึ่งสินทรัพย์ถาวร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form21.form21_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form21.form21_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form21.form21_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form21.form21_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form21.form21_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------21.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">21.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การได้มาซึ่งสินทรัพย์ถาวร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form21.form21_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form21.form21_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form21.form21_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form21.form21_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form21.form21_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------21.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">21.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การโอนย้ายสินทรัพย์ถาวร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form21.form21_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form21.form21_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form21.form21_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form21.form21_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form21.form21_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------21.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">21.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การตรวจนับสินทรัพย์ถาวร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form21.form21_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form21.form21_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form21.form21_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form21.form21_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form21.form21_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 22. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-22 icon="arrow-down-right-square-fill"></b-icon>
              <p>22. กระบวนการบริหารทรัพยากรบุคคล</p>
            </header>
            <b-collapse id="collapse-22" class="mt-2">
              <div class="container-form">
                <!-----------22.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การจัดทํา Job Description</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การวางแผนอัตรากําลังคน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การอบรมและพัฒนาบุคลากร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การอบรมและพัฒนาบุคลากร</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การประเมินผลการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_6.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.7---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.7</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การจ่ายเงินเดือนผลตอบแทนและสวัสดิการ พนักงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_7.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_7.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_7.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_7.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_7.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------22.8---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">22.8</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การลาออก/เลิกจ้าง พนักงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form22.form22_8.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form22.form22_8.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form22.form22_8.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form22.form22_8.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form22.form22_8.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

          <!-- 23. -->
          <section class="mb-4">
            <header class="d-flex">
              <b-icon class="vue-icon" v-b-toggle.collapse-23 icon="arrow-down-right-square-fill"></b-icon>
              <p>23. กระบวนการบริหารด้านบัญชีและการเงิน</p>
            </header>
            <b-collapse id="collapse-23" class="mt-2">
              <div class="container-form">
                <!-----------23.1---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.1</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------23.2---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.2</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_2.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------23.3---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.3</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การบริหารจัดการวงเงินสดย่อย (Petty Cash)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_3.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------23.4---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.4</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การบริหารจัดการวงเงินสดย่อย (Petty Cash)</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_4.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------23.5---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.5</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">งบประมาณ</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_5.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
                <!-----------23.6---------->
                <b-row class="mt-4 d-flex justify-content-between ">
                  <b class="mb-3">23.6</b>
                  <b-col cols="6" class="">
                    
                    <div class="form-offer">
                      <label for="">การจัดทําทะเบียนคุมเงินทดรองจ่าย</label>
                    </div>
                    <b-row class="mt-5">
                      <b>ระดับความสำคัญ</b>
                      <div class="title-head-form d-flex">
                        <div class="con-checkbox">
                          <label class="container-box">สูง
                            <input type="checkbox" value="height" v-model=forms.form23.form23_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form23.form23_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form23.form23_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form23.form23_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form23.form23_6.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
                <hr>
              </div>
            </b-collapse>
          </section>

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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_1.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_2.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_2.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_2.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_2.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_2.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_3.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_3.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_3.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_3.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_3.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_4.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_4.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_4.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_4.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_4.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_5.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_5.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_5.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_5.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_5.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form24.form24_6.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form24.form24_6.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form24.form24_6.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form24.form24_6.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form24.form24_6.currentAction"></b-form-textarea>
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
                            <input type="checkbox" value="height" v-model=forms.form25.form25_1.height :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color1"></span>
                          </label>
                          <label class="container-box">ปานกลาง
                            <input type="checkbox" value="moderate" v-model=forms.form25.form25_1.moderate :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color2"></span>
                          </label>
                        </div>
                        <div class="con-checkbox">
                          <label class="container-box">ต่ำ
                            <input type="checkbox" value="low" v-model=forms.form25.form25_1.low :true-value= 1 :false-value = 0>
                            <span class="checkmark checkbox-color3"></span>
                          </label>
                          <label class="container-box">AIC
                            <input type="checkbox" value="aic" v-model=forms.form25.form25_1.aic :true-value= 1 :false-value = 0>
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
                      <b-form-textarea rows="5" v-model="forms.form25.form25_1.currentAction"></b-form-textarea>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
            </b-collapse>
          </section>
        </div>
      </div>

    <b-row >
      <b-col class="d-flex justify-content-center">
        <button class="positive ui button px-5">บันทึก</button>
      </b-col>
    </b-row>
  </form>
</template>

<script>
// import FormReport from '../views/Form.vue'
export default {
  name: 'task-form',
  components: {
    // FormReport
  },

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
          company_name: '',
          chapter1: '',
          description1: '',
          chapter2: '',
          description2: '',
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
          },
          form4: {
            form4_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form4_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form4_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form4_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form4_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form5: {
            form5_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form5_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form5_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form5_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form6: {
            form6_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form6_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form6_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form6_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
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
          form10: {
            form10_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form10_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form10_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form10_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form10_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form11: {
            form11_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form11_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form11_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form11_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form12: {
            form12_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form12_7: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form13: {
            form13_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form13_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form13_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form13_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form13_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form13_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form14: {
            form14_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form14_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form14_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
          },
          form15: {
            form15_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form15_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form16: {
            form16_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form16_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form16_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form16_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form16_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form16_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form17: {
            form17_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form17_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form18: {
            form18_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form18_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form18_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form18_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form18_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form18_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form19: {
            form19_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form19_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form19_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form19_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form20: {
            form20_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form20_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form20_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form21: {
            form21_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form21_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form21_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form21_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form21_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form22: {
            form22_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_7: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form22_8: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
          form23: {
            form23_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form23_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form23_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form23_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form23_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },
            form23_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0
            },

          },
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
        };
      }
    },
  },

  methods: {
    onSubmit: function () {
      if (this.forms.company_name === '') {
        alert('กรุณากรอกข้อมูลให้ครบ!')
      } else {
        this.$emit('createFormInput', this.forms);
      }
    },

  },


};
</script>
