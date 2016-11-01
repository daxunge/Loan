package com.loan.rn;

import android.os.Environment;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Administrator on 2016/10/14.
 */
class ExcelBean {
    String name;
    String phonenumber;
    String location;
    String id;
    String sex;
    String age;
    String housesturct;
    String houseSize;
    String house_value;
    String toolsKind;
    String toolsNumber;
    String toolsPrize;
    String groundType;
    String groundNumber;
    String groundIncome;
    String outerGroundType;
    String outerGroundNumber;
    String outerGroundIncome;
    String familyIncome;
    String familyExpand;
    String familyDiff;
    String allowance;
    String farmKind;
    String farmNumber;
    String farmIncome;
    String workIncome;
    String otherIncome;
    String dept;
    String loanNumber;
    String privateNumber;
    String car_type;
    String carNumber;
    String carPrize;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHousesturct() {
        return housesturct;
    }

    public void setHousesturct(String housesturct) {
        this.housesturct = housesturct;
    }

    public String getHouseSize() {
        return houseSize;
    }

    public void setHouseSize(String houseSize) {
        this.houseSize = houseSize;
    }

    public String getHouse_value() {
        return house_value;
    }

    public void setHouse_value(String house_value) {
        this.house_value = house_value;
    }

    public String getToolsKind() {
        return toolsKind;
    }

    public void setToolsKind(String toolsKind) {
        this.toolsKind = toolsKind;
    }

    public String getToolsNumber() {
        return toolsNumber;
    }

    public void setToolsNumber(String toolsNumber) {
        this.toolsNumber = toolsNumber;
    }

    public String getToolsPrize() {
        return toolsPrize;
    }

    public void setToolsPrize(String toolsPrize) {
        this.toolsPrize = toolsPrize;
    }

    public String getGroundType() {
        return groundType;
    }

    public void setGroundType(String groundType) {
        this.groundType = groundType;
    }

    public String getGroundNumber() {
        return groundNumber;
    }

    public void setGroundNumber(String groundNumber) {
        this.groundNumber = groundNumber;
    }

    public String getGroundIncome() {
        return groundIncome;
    }

    public void setGroundIncome(String groundIncome) {
        this.groundIncome = groundIncome;
    }

    public String getOuterGroundType() {
        return outerGroundType;
    }

    public void setOuterGroundType(String outerGroundType) {
        this.outerGroundType = outerGroundType;
    }

    public String getOuterGroundNumber() {
        return outerGroundNumber;
    }

    public void setOuterGroundNumber(String outerGroundNumber) {
        this.outerGroundNumber = outerGroundNumber;
    }

    public String getOuterGroundIncome() {
        return outerGroundIncome;
    }

    public void setOuterGroundIncome(String outerGroundIncome) {
        this.outerGroundIncome = outerGroundIncome;
    }

    public String getFamilyIncome() {
        return familyIncome;
    }

    public void setFamilyIncome(String familyIncome) {
        this.familyIncome = familyIncome;
    }

    public String getFamilyExpand() {
        return familyExpand;
    }

    public void setFamilyExpand(String familyExpand) {
        this.familyExpand = familyExpand;
    }

    public String getFamilyDiff() {
        return familyDiff;
    }

    public void setFamilyDiff(String familyDiff) {
        this.familyDiff = familyDiff;
    }

    public String getAllowance() {
        return allowance;
    }

    public void setAllowance(String allowance) {
        this.allowance = allowance;
    }

    public String getFarmKind() {
        return farmKind;
    }

    public void setFarmKind(String farmKind) {
        this.farmKind = farmKind;
    }

    public String getFarmNumber() {
        return farmNumber;
    }

    public void setFarmNumber(String farmNumber) {
        this.farmNumber = farmNumber;
    }

    public String getFarmIncome() {
        return farmIncome;
    }

    public void setFarmIncome(String farmIncome) {
        this.farmIncome = farmIncome;
    }

    public String getWorkIncome() {
        return workIncome;
    }

    public void setWorkIncome(String workIncome) {
        this.workIncome = workIncome;
    }

    public String getOtherIncome() {
        return otherIncome;
    }

    public void setOtherIncome(String otherIncome) {
        this.otherIncome = otherIncome;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(String loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getPrivateNumber() {
        return privateNumber;
    }

    public void setPrivateNumber(String privateNumber) {
        this.privateNumber = privateNumber;
    }

    public String getCar_type() {
        return car_type;
    }

    public void setCar_type(String car_type) {
        this.car_type = car_type;
    }

    public String getCarNumber() {
        return carNumber;
    }

    public void setCarNumber(String carNumber) {
        this.carNumber = carNumber;
    }

    public String getCarPrize() {
        return carPrize;
    }

    public void setCarPrize(String carPrize) {
        this.carPrize = carPrize;
    }
}


public class savefile extends ReactContextBaseJavaModule {
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    public String fileName = Environment.getExternalStorageDirectory().getPath()
            +File.separator+"LOAN"+File.separator+dateFormat.format(new Date())+"-Info.exl";
        public savefile(ReactApplicationContext context){
            super(context);
        }
        public String getName (){
            return "savefile";
        }
    @ReactMethod
    public void saveInfo(String message) {
        try{
            File file = new File(fileName);
            if (!file.exists()){
                file.createNewFile();
            }
            FileOutputStream outputStream = new FileOutputStream(fileName);
            outputStream.write(message.getBytes());
            outputStream.flush();
            outputStream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e){
            e.printStackTrace();
        }
//        FileOutputStream fout = new FileOutputStream(fileName);
//        byte[] bytes = writeStr.getBytes();
//
//        fout.write(bytes);
//        fout.close();
//
    }
    @ReactMethod
    public String readInfo(){
        try {
            FileInputStream inputStream = new FileInputStream(fileName);
            byte[] bytes = new byte[64];
            ByteArrayOutputStream arrayOutputStream = new ByteArrayOutputStream();
            while (inputStream.read(bytes) != -1) {
                arrayOutputStream.write(bytes, 0, bytes.length);
            }
            inputStream.close();
            arrayOutputStream.close();
            String content = new String(arrayOutputStream.toByteArray());
            return content;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return "";
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }
    @ReactMethod
    public String getfilelist (){
        String result = "";
        String file = Environment.getExternalStorageDirectory().getPath()
                +File.separator+"Loan";
        String[] list = new File(file).list();
        StringBuffer buffer = new StringBuffer();
        for (int i = 0;i<list.length;i++){
            buffer.append(list[i]);
            buffer.append(" ");
        }
        result = buffer.toString();
        return result;
    }
    @ReactMethod
    public boolean toecxel(String Data){
        File dir = new File(Environment.getExternalStorageDirectory().getPath()+File.separator+"LOAN");
        if (!dir.exists()){
            dir.mkdir();
        }
        Gson gson = new Gson();
        ExcelBean excelBean = gson.fromJson(Data,ExcelBean.class);
        boolean flag  = false;
        HSSFWorkbook wb = new HSSFWorkbook();
        File file = new File(fileName);
        HSSFSheet sheet = wb.createSheet("��һ");
        HSSFRow row = sheet.createRow(0);
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        HSSFCell cell = row.createCell(0);
        cell.setCellValue("姓名");
        cell.setCellStyle(style);

        cell = row.createCell(1);
        cell.setCellValue("手机号");
        cell.setCellStyle(style);

        cell = row.createCell(2);
        cell.setCellValue("证件号֤");
        cell.setCellStyle(style);

        cell = row.createCell(3);
        cell.setCellValue("地区");
        cell.setCellStyle(style);

        cell = row.createCell(4);
        cell.setCellValue("性别");
        cell.setCellStyle(style);

        cell = row.createCell(5);
        cell.setCellValue("年龄");
        cell.setCellStyle(style);

        cell = row.createCell(6);
        cell.setCellValue("房屋结构");
        cell.setCellStyle(style);

        cell = row.createCell(7);
        cell.setCellValue("面积");
        cell.setCellStyle(style);


        cell = row.createCell(8);
        cell.setCellValue("体积ֵ");
        cell.setCellStyle(style);

        cell = row.createCell(9);
        cell.setCellValue("农机类型");
        cell.setCellStyle(style);

        cell = row.createCell(10);
        cell.setCellValue("数量");
        cell.setCellStyle(style);

        cell = row.createCell(11);
        cell.setCellValue("价值ֵ");
        cell.setCellStyle(style);

        cell = row.createCell(12);
        cell.setCellValue("应分地亩数");
        cell.setCellStyle(style);

        cell = row.createCell(13);
        cell.setCellValue("旱田/水田");
        cell.setCellStyle(style);

        cell = row.createCell(14);
        cell.setCellValue("应分地年收入");
        cell.setCellStyle(style);

        cell = row.createCell(15);
        cell.setCellValue("外包地类型");
        cell.setCellStyle(style);

        cell = row.createCell(16);
        cell.setCellValue("亩数");
        cell.setCellStyle(style);

        cell = row.createCell(17);
        cell.setCellValue("外包地年收入");
        cell.setCellStyle(style);

        cell = row.createCell(18);
        cell.setCellValue("家庭年总收入");
        cell.setCellStyle(style);

        cell = row.createCell(19);
        cell.setCellValue("家庭年总支出");
        cell.setCellStyle(style);

        cell = row.createCell(20);
        cell.setCellValue("家庭收入轧差");
        cell.setCellStyle(style);

        cell = row.createCell(21);
        cell.setCellValue("农业补贴额度");
        cell.setCellStyle(style);

        cell = row.createCell(22);
        cell.setCellValue("养殖类型");
        cell.setCellStyle(style);

        cell = row.createCell(23);
        cell.setCellValue("数量");
        cell.setCellStyle(style);

        cell = row.createCell(24);
        cell.setCellValue("养殖收入");
        cell.setCellStyle(style);

        cell = row.createCell(25);
        cell.setCellValue("打工年收入");
        cell.setCellStyle(style);

        cell = row.createCell(26);
        cell.setCellValue("其他年收入");
        cell.setCellStyle(style);

        cell = row.createCell(27);
        cell.setCellValue("债务总金额");
        cell.setCellStyle(style);

        cell = row.createCell(28);
        cell.setCellValue("银行贷款金额");
        cell.setCellStyle(style);

        cell = row.createCell(29);
        cell.setCellValue("民间借贷金额");
        cell.setCellStyle(style);

        cell = row.createCell(30);
        cell.setCellValue("汽车数量");
        cell.setCellStyle(style);

        cell = row.createCell(31);
        cell.setCellValue("价值ֵ");
        cell.setCellStyle(style);
        int i = 1;
            row = sheet.createRow(i);
            int j = 0;
            row.createCell(j++).setCellValue(excelBean.getName());
            row.createCell(j++).setCellValue(excelBean.getPhonenumber());
            row.createCell(j++).setCellValue(excelBean.getId());
            row.createCell(j++).setCellValue(excelBean.getLocation());
            row.createCell(j++).setCellValue(excelBean.getSex());
            row.createCell(j++).setCellValue(excelBean.getAge());
            row.createCell(j++).setCellValue(excelBean.getHousesturct());
            row.createCell(j++).setCellValue(excelBean.getHouseSize());
            row.createCell(j++).setCellValue(excelBean.getHouse_value());
            row.createCell(j++).setCellValue(excelBean.getToolsKind());
            row.createCell(j++).setCellValue(excelBean.getToolsNumber());
            row.createCell(j++).setCellValue(excelBean.getToolsPrize());
            row.createCell(j++).setCellValue(excelBean.getGroundNumber());
            row.createCell(j++).setCellValue(excelBean.getGroundType());
            row.createCell(j++).setCellValue(excelBean.getGroundIncome());
            row.createCell(j++).setCellValue(excelBean.getOuterGroundType());
            row.createCell(j++).setCellValue(excelBean.getOuterGroundNumber());
            row.createCell(j++).setCellValue(excelBean.getOuterGroundIncome());
            row.createCell(j++).setCellValue(excelBean.getFamilyIncome());
            row.createCell(j++).setCellValue(excelBean.getFamilyExpand());
            row.createCell(j++).setCellValue(excelBean.getFamilyDiff());
            row.createCell(j++).setCellValue(excelBean.getAllowance());
            row.createCell(j++).setCellValue(excelBean.getFarmKind());
            row.createCell(j++).setCellValue(excelBean.getFarmNumber());
            row.createCell(j++).setCellValue(excelBean.getFarmIncome());
            row.createCell(j++).setCellValue(excelBean.getWorkIncome());
            row.createCell(j++).setCellValue(excelBean.getOtherIncome());
            row.createCell(j++).setCellValue(excelBean.getDept());
            row.createCell(j++).setCellValue(excelBean.getLoanNumber());
            row.createCell(j++).setCellValue(excelBean.getPrivateNumber());
            row.createCell(j++).setCellValue(excelBean.getCar_type());
            row.createCell(j++).setCellValue(excelBean.getCarNumber());
            row.createCell(j++).setCellValue(excelBean.getCarPrize());
        try {
            FileOutputStream outputStream = new FileOutputStream(fileName);
            wb.write(outputStream);
            outputStream.close();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return flag;

    }

}
