package com.loan.rn;

import android.content.Context;
import android.os.Environment;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * Created by Administrator on 2016/10/12.
 */
public class ZIP extends ReactContextBaseJavaModule {
    public ZIP(ReactApplicationContext context){
        super(context);
    }
    public String getName(){
        return "ZIP";
    }
    @ReactMethod
    public boolean  show (){
        return false;
    }
    @ReactMethod
    public boolean Packagezip() {
        String filename =Environment.getExternalStorageDirectory().getPath()+File.separator+"LOAN";
        File[] files =new File(filename).listFiles();
        String zipPath = Environment.getExternalStorageDirectory().getPath()+File.separator+"Data.zip";
        boolean flag = false;
        byte[] buffer = new byte[1024*10];
        File file2 = new File(zipPath);
        if (!file2.exists()){
            try {
                file2.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            ZipOutputStream outputStream = new ZipOutputStream(new FileOutputStream(zipPath));
            for (File file : files) {
                try {
                    FileInputStream fileInputStream = new FileInputStream(file);
                    BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream, 10*1024);
                    outputStream.putNextEntry(new ZipEntry(file.getName()));
                    int length;
                    while ((length = bufferedInputStream.read(buffer, 0,1024*10))!=-1) {
                        outputStream.write(buffer);
                    }
                    fileInputStream.close();
                    bufferedInputStream.close();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
            flag = true;
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
