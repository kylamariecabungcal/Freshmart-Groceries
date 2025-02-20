import mysql.connector
from mysql.connector import Error


name = input("Enter full name: ")
birth = input("Enter date of birth (YYYY-MM-DD): ")
add = input("Enter address: ")
contact = input("Enter contact no: ")
emergency = input("Enter emergency contact no: ")

try:
    con = mysql.connector.connect(host='localhost', database='emp', user='root',)
    cur = con.cursor()

    query = "INSERT INTO emp_info (full_name, date_of_birth, address, contact_no, emergency_con) VALUES (%s, %s, %s, %s, %s)"
    cur.execute(query, (name, birth, add, contact, emergency))

    con.commit()
    print(" Successfully!")

    cur.close()
except Error as error:
    print(f"Insert data failed: {error}")
finally:
    if con.is_connected():
        con.close()
        print("MySQL Connection is now CLOSED.")