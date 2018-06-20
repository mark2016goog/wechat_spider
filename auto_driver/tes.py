from time import sleep
from redis import *
from appium import webdriver
import os

desire_caps = {}
desire_caps['platformName'] = 'Android'
# 诺基亚6
# desire_caps['platformVersion'] = '8.1.0'
# desire_caps['deviceName'] = 'PL2GAM1810904175'

# 小米6
# desire_caps['platformVersion'] = '8.0.0'
# desire_caps['deviceName'] = '1231acb'

# 红米5
desire_caps['platformVersion'] = '7.1.2'
desire_caps['deviceName'] = '2466979e7cf5'

desire_caps['appPackage'] = 'com.tencent.mm'
desire_caps['appActivity'] = '.ui.LauncherUI'
# 以下两项主要是在点击输入框的时候,会触发系统输入法,导致可能我们发送的是字符 `234`,但是九宫格中文输入法有可能给出的是 `bei` ,这两个属性就是屏蔽系统输入法,使用appium自己的,但是测试完成后,得自己去系统设置中将输入法切换过来
desire_caps['unicodeKeyboard'] = True
desire_caps['resetKeyboard'] = True
# 不重置apk
desire_caps['noReset'] = True
desire_caps["newCommandTimeout"] = 172800  # 等待下一条命令延时 2 天
# desire_caps['chromeOptions'] = {'androidProcess': 'com.tencent.mm:tools'}

# ip地址在pc上的 appium客户端-设置 中可以看到 `server address` 和 `port`,保持一致即可
driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desire_caps)
sleep(6)

# 1.点击通讯录
el_contact = driver.find_elements_by_android_uiautomator("new UiSelector().text(\"通讯录\")")[0]
el_contact.click()

# 2.点击公众号
el_public = driver.find_elements_by_android_uiautomator("new UiSelector().text(\"公众号\")")[0]
el_public.click()

# 3.第一个公众号
# driver.tap([[210, 334], [306, 399]], 20)
# el_public = driver.find_elements_by_android_uiautomator("new UiSelector().text(\"差评\")")[0]
el_public = driver.find_element_by_id("com.tencent.mm:id/v9").find_element_by_class_name("android.widget.LinearLayout")
el_public.click()

# 4.查看历史消息
el_info = driver.find_element_by_accessibility_id("聊天信息")
el_info.click()

sleep(2)

# driver.swipe(530, 1900, 530, 200, 200) # 滑动到底部  1080p

driver.swipe(350, 1260, 360, 480, 200) # 滑动到底部  720p 红米5

history = driver.find_elements_by_android_uiautomator("new UiSelector().text(\"全部消息\")")[0]
history.click()


# 5.点击一个详情页触发详情页
sleep(20)
# driver.tap([(530, 1300)], 200)  # 点击第一篇文章的位置进入详情
driver.tap([(360, 920)], 200)  # 点击第一篇文章的位置进入详情

sleep(20)  # 给个缓冲时间
print('[NOTICE]' + ' Appium python script quit')

driver.quit()

print('[NOTICE]' + ' Upload Wechat info to Remote Server')
current_file_path = os.path.dirname(__file__)
script_name = 'upload_data.py'
script_path = os.path.join(current_file_path, script_name).replace('\\', '/')
os.system('python %s' % script_path)
sleep(10)
print('[NOTICE]' + ' Upload Compelete')
