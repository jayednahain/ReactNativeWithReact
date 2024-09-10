package com.reactwithreactnative;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

import java.util.HashMap;


/**
 * CalenderModule
 */
public class CalenderModule extends ReactContextBaseJavaModule {
    CalenderModule(ReactApplicationContext context) {
        super(context);
    }


    @NonNull
    @Override
    public String getName() {
        return "CalenderModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalenderModule", "calander module: " + name + "location name: " + location);

    }
    
    @ReactMethod
    public void returnDataToCross(Callback callback) {
        callback.invoke("data return from native code");
    }

//    public void returnResponse(Callback callback){
//        callback.invoke("data return from native code");
//    }

    @ReactMethod
    public void sendPromiseDataToCross(Callback callback){
        try {
            URL url = new URL("https://dummyjson.com/products");
//            HttpURLConnection urlConnection = ()

            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

            urlConnection.setRequestMethod("GET");

            int responseCode = urlConnection.getResponseCode();
            System.out.println("Response Code: " + responseCode);
//            Log.d("reponse",responseCode);
            System.out.println("responseCode : "+responseCode);



            if (responseCode == HttpURLConnection.HTTP_OK) { // 200 OK
                // Step 5: Create a BufferedReader to read the response
                BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                // Step 6: Read the response line by line
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }

                // Step 7: Close the BufferedReader
                in.close();

                // Step 8: Print or process the response
                System.out.println("Response: " + response.toString());

                callback.invoke(response.toString());

            } else {
                System.out.println("GET request failed");
            }

        }

        catch (Exception error){

        }
    }
}


