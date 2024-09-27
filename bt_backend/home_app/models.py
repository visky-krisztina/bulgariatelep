from django.db import models
from django.contrib.auth.models import User


class Item(models.Model):
    PAGE_CHOICES = [
        ('home', 'Home'),
        ('about', 'Rolunk'),
        ('alkalmaink', 'Alkalmaink'),
        ('gyerekek', 'Gyerekek'),
        ('fiatalok', 'Fiatalok'),
        ('felnottek', 'Felnőttek'),
        ('zenesIstentiszteletek', 'Zenes Istentiszteletek'),
        ('csendesNapok', 'Csendes napok'),
        ('contact', 'Elérhetőség'),
        ('home_sm_card', 'Kiskartyak - Home'),
        ('home_hero', 'Nagy képek - Home'),
    ]
    id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    page = models.CharField(max_length=200, choices=PAGE_CHOICES, null=True, blank=True)
    headline = models.CharField(max_length=200, null=True, blank=True)
    p1 = models.TextField(null=True, blank=True)
    p2 = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    buttonLabel = models.CharField(max_length=200, null=True, blank=True)
    to = models.CharField(max_length=200, null=True, blank=True)
    cName = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return 'Page: ' + self.page + ', Section: ' + self.headline


class NavItems(models.Model):

    CNAME_CHOICES = [
        ('nav-item', 'nav-item'),
        ('dropdown-link', 'dropdown-link'),
    ]
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=200, null=True, blank=True)
    path = models.CharField(max_length=200, null=True, blank=True)
    cName = models.CharField(max_length=200, choices=CNAME_CHOICES, null=True, blank=True) 

class NavItem(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=200, null=True, blank=True)
    path = models.CharField(max_length=200, null=True, blank=True)
    cName = models.CharField(max_length=200, default='nav-item')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='sub_items')

    def __str__(self):
        return 'Navbar: ' + self.title


class MainSliderData(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    imgUrl = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    subTitle = models.TextField(null=True, blank=True)

    def __str__(self):
        return 'mainSlider ' + str(self.id)

class Event(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    imgUrl = models.ImageField(null=True, blank=True)
    eventTitle = models.CharField(max_length=200, null=True, blank=True)
     # Dropdown choices for months
    MONTH_CHOICES = [
        ('JAN', 'January'),
        ('FEB', 'February'),
        ('MAR', 'March'),
        ('APR', 'April'),
        ('MAY', 'May'),
        ('JUN', 'June'),
        ('JUL', 'July'),
        ('AUG', 'August'),
        ('SEP', 'September'),
        ('OCT', 'October'),
        ('NOV', 'November'),
        ('DEC', 'December'),
    ]
    eventDateMonth = models.CharField(max_length=3, choices=MONTH_CHOICES, null=True, blank=True)

 # Dropdown choices for days (01 to 31)
    DAY_CHOICES = [(str(i).zfill(2), str(i).zfill(2)) for i in range(1, 32)]
    eventDateDay = models.CharField(max_length=2, choices=DAY_CHOICES, null=True, blank=True)
    eventDateTime = models.CharField(max_length=50, null=True, blank=True)
    eventLocation = models.CharField(max_length=200, null=True, blank=True, default='Bulgariatelep, Arad utca 10, Kolozsvar')
    eventDescription = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return self.eventTitle



class Hero(models.Model):
    PAGE_CHOICES = [
        ('about', 'Rolunk'),
        ('alkalmaink', 'Alkalmaink'),
        ('gyerekek', 'Gyerekek'),
        ('fiatalok', 'Fiatalok'),
        ('felnottek', 'Felnőttek'),
        ('zenesIstentiszteletek', 'Zenes Istentiszteletek'),
        ('csendesNapok', 'Csendes napok'),
        ('predikaciok', 'Predikaciok'),
        ('contact', 'Elérhetőség'),
        ('bankiAdatok', 'Banki Adatok'),

    ]
    id = models.AutoField(primary_key=True, editable=False)
    page = models.CharField(max_length=200, choices=PAGE_CHOICES, null=True, blank=True)
    heroTitle = models.CharField(max_length=200, null=True, blank=True)
    bibleVerse = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return 'Hero: ' + self.page
    
class Preacher(models.Model):
    PREACHER_CHOICES = [
        ('Simon János', 'Simon János'),
        ('Barta István', 'Barta István'),
        ('other', 'Other'),
    ]
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, choices=PREACHER_CHOICES, null=True, blank=True)
    custom_name = models.CharField(max_length=200, null=True, blank=True)  # Field to hold custom name
    job = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    phone = models.CharField(max_length=17, null=True, blank=True)


    def __str__(self):
        return 'Lelkész: ' + (self.custom_name if self.name == 'other' else self.get_name_display())


class Sermon(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=300, null=True, blank=True)
    pastor = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    book = models.CharField(max_length=200, null=True, blank=True)
    series = models.CharField(max_length=300, null=True, blank=True)
    fb_link = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return 'Predikacio: ' + self.title
    

class DailyVerses(models.Model):
    date = models.DateField(unique=True)
    verse1 = models.TextField()
    verse2 = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Verse for {self.date}"
    



