"""
Management command to validate code format
"""

from django.core.management.base import BaseCommand

from fantasy_api.models import CustomUser


class Command(BaseCommand):
    """
    Command class.
    """

    def add_arguments(self, parser):
        """
        Command line argument parser
        """

        parser.add_argument("--email", "-e", dest="email", type=str)

    def handle(self, *args, **options):
        """
        Handler method.
        """

        email = options["email"]
        u = CustomUser.objects.get(email=email)
        u.delete()
