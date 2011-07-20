
      (function(){
        olark.extend('WelcomeAssist');

        
        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"WelcomeAssist":{"enabled":true,"welcome_messages":["Thanks for stopping by! Can I help you with anything?"],"welcome_delay_in_seconds":30},"system":{"show_popout":1,"operator_has_stopped_typing_text":" has stopped typing","width_px":"250px","email_body_error_text":"You must complete all fields and specify a valid email address","show_pre_chat":0,"hide_not_available":0,"offline_message":"Sorry, we're not here right now. If you enter a question, we'll get back to you just as soon as we return.","height_px":"155px","say_text":"Type your question and hit \u003Center\u003E to chat","busy_text":"Live Help: Unavailable","busy_message":"All of our representatives are with other customers at this time. We will be with you shortly.","habla_name_input_text":"\u003Cclick here\u003E and type your Name","habla_offline_sent_text":"Thank you for your message.  We will get back to you as soon as we can.","inline_css_url":"static.olark.com/css/9/c/9cf11d2c5204220eb1ca3e5514b45944.css","bottom_margin":0,"right_margin":20,"pre_chat_error_text":"Please enter your name and email in case we get disconnected.","start_expanded":0,"habla_offline_email_text":"\u003Cclick here\u003E and type your Email","close_hides_window":1,"top_margin":0,"welcome_msg":"Need help? That's why we're here. Ask us any question you want.","not_available_text":"Live Help: Offline","expandOnFirstMessageReceived":1,"expandOnMessageReceived":0,"habla_offline_body_text":"We are offline, send us a message","disable_width":true,"offline_msg_mode":1,"inline_css_url_ie":"static.olark.com/css/4/b/4b007547beed63881b8194daf703f6ce.css","pre_chat_submit":"Click here to start chatting","height":"155","start_hidden":0,"in_chat_text":"Live Chat: Feel free to ask us anything!","pre_chat_message":"Hi, I am around, click 'start chatting' to contact me.","before_chat_text":"Click Here for Live Help","operator_is_typing_text":" is typing...","habla_offline_submit_value":"Send","left_margin":20,"disableJSStyles":0,"corner_position":"BR","width":"250","inline_css_url_quirks":"static.olark.com/css/8/c/8cac39f9a4f9a60983d3f3d9c19fe912.css","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj5Qb3dlcmVkIEJ5IDxhIGhyZWY9Imh0dHA6Ly93d3cub2xhcmsuY29tLz9yaWQ9ODYwMC00MjgtMTAtNzQ5OSZ1dG1fbWVkaXVtPXdpZGdldCZ1dG1fY2FtcGFpZ249cG93ZXJlZF9ieSZ1dG1fc291cmNlPTg2MDAtNDI4LTEwLTc0OTkiIGlkPSJoYmxpbms5OSIgdGFyZ2V0PSJfYmxhbmsiPk9sYXJrPC9hPg==","site_id":"8600-428-10-7499","operators":{}}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="8600-428-10-7499";
          });
          olark._.finish();
        }
      })();
    