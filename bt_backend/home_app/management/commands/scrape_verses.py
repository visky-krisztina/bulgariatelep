import requests
from bs4 import BeautifulSoup
from django.core.management.base import BaseCommand
from home_app.models import DailyVerses

class Command(BaseCommand):
    help = 'Scrape daily verse from the website'

    def add_arguments(self, parser):
        parser.add_argument('date', type=str)

    def handle(self, *args, **options):
        date = options['date']
        verses = self.scrape_daily_verse(date)
        if len(verses) == 2:
            DailyVerses.objects.update_or_create(
                date=date,
                defaults={'verse1': verses[0], 'verse2': verses[1]}
            )
            self.stdout.write(self.style.SUCCESS(f"Scraped and saved verses for {date}"))
        else:
            self.stdout.write(self.style.ERROR(f"Failed to scrape verses for {date}"))


    def scrape_daily_verse(self, date):
        url = f"https://www.evangelikus.hu/hitunk/lelki-taplalek?napiigenap={date}"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find the <div> containing the <p> elements
        div = soup.find('h5', id='page#6').find_next('div')
        p_elements = div.find_all('p')

        # Extract text from <p> elements
        verses = [p.get_text() for p in p_elements]

        return verses
