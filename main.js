
/*
*tính lương nhân viên
sơ đồ 3 khối
+đầu vào:
-nhập số ngày làm việc
+các bước xử lý
-tổng lương= số ngày làm việc * hệ số lương(100.000).
+ đầu ra: tổng lương.
*/  

document.getElementById("tinhTongTien").onclick=function(){
var ngayCong= document.getElementById("ngayCong").value;
var tongTienThang= ngayCong*100000;
var result= "thanh tien:<br/> "+tongTienThang+"VND";
document.getElementById("thanhTien").innerHTML=result;
};
 /*
 giá trị trung binh tổng 5 so thuc
 sơ đồ 3 khối
 + đầu vào:
 nhập vào giá trị 5 số thực.
 +các bước xử lý
 - công thức tính giá trị trung bình tổng 5 số thực
 giá trị trung bình= tổng 5 số thực/5
 +đầu ra
 xuất ra kết quả giá trị trung bình 
  */
document.getElementById("trungBinhCong").onclick=function(){
  var soThuNhat=document.getElementById("inPutNo1").value*1;
  var soThuHai=document.getElementById("inPutNo2").value*1;
  var soThuBa=document.getElementById("inPutNo3").value*1;
  var soThuTu=document.getElementById("inPutNo4").value*1;
  var soThuNam=document.getElementById("inPutNo5").value*1;
  var trungBinh=(soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5;
  var result = "trung bình cộng của 5 số là: "+trungBinh;
  document.getElementById("ketQua").innerHTML=result;
};
 /*
quy đổi usd sang vnd
sơ đồ 3 khối
+đầu vào
- tỉ giá quy đổi usd-->vnd
1usd=23500 vnd
nhập số lượng usd cần quy đổi
+các bước xử lý
-công thức quy đổi usd-->vnd
usd= 23500vnd* số lượng usd cần quy đổi
+đầu ra
số tiền vnd sau khi quy đổi.
  */
document.getElementById("quyDoi").onclick=function(){
  var soLuongUsd= document.getElementById("soLuongUsd").value;
  var tyGiaQuyDoi= soLuongUsd*23500;
  var result="Tỷ giá VND sau khi quy đổi:<br/>"+tyGiaQuyDoi+"VND";
  document.getElementById("soTienSauQuyDoi").innerHTML=result;
};

/*
tính chu vi, diện tích hình chữ nhật
sơ đồ 3 khối
+đầu vào
-nhập vào giá trị chiều dài và chiều rộng
+các bước xủ lý
-công thức tính diện tích hình chữ nhật
diện tích= chiều dài*chiều rộng
-công thức tính chu vi
chu vi=(chiều dài+chiều rộng)*2
+đầu ra
-giá trị chu vi và diện tích hình chữ nhật
 */
 document.getElementById("btn__click1").onclick=function(){
   var chieuDai=document.getElementById("canhA").value*1;
   var chieuRong=document.getElementById("canhB").value*1;
   var chuVi= (chieuDai+chieuRong)*2;
   var result="chu vi: "+ chuVi;
   document.getElementById("ketQua1").innerHTML=result;
 };
 document.getElementById("btn__click2").onclick=function(){
  var chieuDai=document.getElementById("canhA").value*1;
   var chieuRong=document.getElementById("canhB").value*1;
   var dienTich=chieuDai*chieuRong;
   var result="Diện tích: "+dienTich;
   document.getElementById("ketQua1").innerHTML=result;
 };

/*
tính tổng hai ký số
+đầu vào
-nhập 1 số có 2 chữ số
+ cá bước xử lý
-tách lấy số hàng chục và lấy phần nguyên bằng công thức
số hàng chục= Math.floor(số nhập vào/10)
-tách lấy phần đơn vị thực hiện phép chia lấy phần dư
số hàng đơn vị=số nhập vào%10
-sau khi tách hàng chục và hàng đơn vị ta tính ký số của hai số bằng công thức
ký số=số hàng chục+số hàng đơn vị
+đầu ra
tổng ký số hai chữ số.
*/
document.getElementById("tongKySo").onclick=function(){
  var nhapSo=document.getElementById("inPutNumber").value*1;
  var soHangChuc=Math.floor(nhapSo/10);
  var soHangDonVi= nhapSo%10;
  var tongKySoHaiSo= soHangChuc+soHangDonVi;
  var result ="Tổng ký số là: "+ tongKySoHaiSo;
  document.getElementById("tongKy2So").innerHTML=result;
};





