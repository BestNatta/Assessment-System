<template>
  <div>
    <div class="container">
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
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_1.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_1.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_1.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_1.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_1.group" :options="forms.form18.form18_1.options18_1"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_1.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------18.2---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">18.2</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การบริหารจัดการฐานข้อมูล</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_2.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_2.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_2.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_2.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_2.group" :options="forms.form18.form18_2.options18_2"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_2.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------18.3---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">18.3</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">ระยะเวลาและวงเงินสินเชื่อ</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_3.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_3.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_3.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_3.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_3.group" :options="forms.form18.form18_3.options18_3"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_3.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------18.4---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">18.4</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">กําหนดราคา</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_4.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_4.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_4.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_4.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_4.group" :options="forms.form18.form18_4.options18_4"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_4.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------18.5---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">18.5</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การติดตามทวงหนี้</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_5.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_5.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_5.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_5.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_5.group" :options="forms.form18.form18_5.options18_5"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_5.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------18.6---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">18.6</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การรับข้อร้องเรียน</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form18.form18_6.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form18.form18_6.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form18.form18_6.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form18.form18_6.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form18.form18_6.group" :options="forms.form18.form18_6.options18_6"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form18.form18_6.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
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
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form19.form19_1.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form19.form19_1.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form19.form19_1.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form19.form19_1.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form19.form19_1.group" :options="forms.form19.form19_1.options19_1"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form19.form19_1.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------19.2---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">19.2</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การขอซื้อ</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form19.form19_2.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form19.form19_2.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form19.form19_2.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form19.form19_2.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form19.form19_2.group" :options="forms.form19.form19_2.options19_2"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form19.form19_2.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------19.3---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">19.3</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การเปรียบเทียบและคัดเลือกผู้ขาย</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form19.form19_3.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form19.form19_3.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form19.form19_3.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form19.form19_3.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form19.form19_3.group" :options="forms.form19.form19_3.options19_3"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form19.form19_3.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------19.4---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">19.4</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การบริหารจัดการฐานข้อมูล</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form19.form19_4.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form19.form19_4.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form19.form19_4.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form19.form19_4.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form19.form19_4.group" :options="forms.form19.form19_4.options19_4"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form19.form19_4.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
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
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">นโยบายและคู่มือการปฏิบัติงาน</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form20.form20_1.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form20.form20_1.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form20.form20_1.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form20.form20_1.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form20.form20_1.group" :options="forms.form20.form20_1.options20_1"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form20.form20_1.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------20.2---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">20.2</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การบริหารจัดการฐานข้อมูล</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form20.form20_2.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form20.form20_2.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form20.form20_2.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form20.form20_2.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form20.form20_2.group" :options="forms.form20.form20_2.options20_2"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form20.form20_2.currentAction"></b-form-textarea>
                      </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <!-----------20.3---------->
            <b-row class="mt-4 d-flex justify-content-between ">
              <b class="mb-3">20.3</b>
              <b-col cols="6" >
                <div class="form-offer">
                  <label for="">การดูแลฐานข้อมูล</label>
                </div>
                <b-row class="mt-5 d-block px-3">
                  <b>ระดับความสำคัญ</b>
                  <div class="title-head-form d-flex">
                    <div class="con-checkbox">
                      <label class="container-box">สูง
                        <input type="checkbox" value="height" v-model=forms.form20.form20_3.height :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color1"></span>
                      </label>
                      <label class="container-box">ปานกลาง
                        <input type="checkbox" value="moderate" v-model=forms.form20.form20_3.moderate :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color2"></span>
                      </label>
                    </div>
                    <div class="con-checkbox">
                      <label class="container-box">ต่ำ
                        <input type="checkbox" value="low" v-model=forms.form20.form20_3.low :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color3"></span>
                      </label>
                      <label class="container-box">AIC
                        <input type="checkbox" value="aic" v-model=forms.form20.form20_3.aic :true-value=1
                          :false-value=0>
                        <span class="checkmark checkbox-color4"></span>
                      </label>
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col cols="5" >
                <b-form-group content-cols="8" label-cols="12">
                    <b>กลุ่ม</b>
                    <b-form-select v-model="forms.form20.form20_3.group" :options="forms.form20.form20_3.options20_3"></b-form-select>
                </b-form-group>
                <b-row class="mt-5">
                  <b-col>
                      <b-form-group content-cols="12" label-cols="12">
                          <b>การดำเนินการในปัจจุบัน</b>
                          <b-form-textarea rows="5" v-model="forms.form20.form20_3.currentAction"></b-form-textarea>
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
  name: 'form-report7',
  props: {
    forms: {
      type: Object,
      required: false,
      default: () => {
        return {
          form18: {
            form18_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options18_1: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form18_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options18_2: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form18_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options18_3: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form18_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options18_4: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form18_5: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options18_5: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form18_6: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options18_6: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },

          },
          form19: {
            form19_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options19_1: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form19_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options19_2: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form19_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options19_3: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form19_4: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options19_4: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },

          },
          form20: {
            form20_1: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options20_1: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form20_2: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Management',
              options20_2: [
                { value: 'Board of Directors', text: 'Board of Directors' },
                { value: 'Management', text: 'Management' },
                { value: 'Operation', text: 'Operation' },
              ],
            },
            form20_3: {
              currentAction: '',
              height: 0,
              moderate: 0,
              low: 0,
              aic: 0,
              total: 0,
              group: 'Operation',
              options20_3: [
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