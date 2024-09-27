from django.core.management.base import BaseCommand
from django.conf import settings

class Command(BaseCommand):
    help = 'Show the BASE_DIR'

    def handle(self, *args, **options):
        self.stdout.write(str(settings.BASE_DIR))
