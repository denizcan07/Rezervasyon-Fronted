Table oluşturma query'si : 
CREATE TABLE Reservations
(
    Id INT IDENTITY(1,1) PRIMARY KEY, 
    Ad NVARCHAR(100) NOT NULL,        
    Soyad NVARCHAR(100) NOT NULL,      
    Bastarih DATE NOT NULL,           
    Bittarih DATE NOT NULL,            
    Telefon NVARCHAR(20) NOT NULL,     
    Tc NVARCHAR(11) NOT NULL           
);

Örnek ekran görüntüsü ektedir;
![image](https://github.com/user-attachments/assets/ffe23bdc-aca8-490e-b77e-d16bb92ced95)
