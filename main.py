from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
service = Service(executable_path='chromedriver-win64\chromedriver.exe')
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)


# Open the login page
driver.get('https://timetable.iitr.ac.in:8000/#/home')

# Wait for the dropdown to be available by waiting for the element to be present
time.sleep(2)  # Wait for 2 seconds (this should be replaced with more robust wait conditions)

# Locate the dropdown element
login_type_dropdown = driver.find_element(By.NAME, 'LoginType')  # Replace 'loginType' with the actual name/ID of the dropdown

# Create a Select object
select = Select(login_type_dropdown)

# Select by visible text
select.select_by_visible_text('All other Student including Faculty')  # Replace with the actual text as needed

# Continue with finding and filling out the username and password
username_input = driver.find_element(By.CSS_SELECTOR, 'input[type="username"].form-control.ng-untouched.ng-pristine.ng-invalid')
password_input = driver.find_element(By.CSS_SELECTOR, 'input[type="password"].form-control.ng-untouched.ng-pristine.ng-invalid')
login_button = driver.find_element(By.CSS_SELECTOR, '.btn.btn-primary')

# Enter login credentials
username_input.send_keys('20118016')
password_input.send_keys('lol1234')

# Click the login button
login_button.click()

# Add some delay to wait for login to complete
time.sleep(5)

# Continue with your automation task

# Close the browser when done
driver.quit()
