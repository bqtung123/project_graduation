import scrapy
from tripadvisor.items import HotelItem


class BookingSpider(scrapy.Spider):
    name = 'list'
    page_number = 2
    start_urls = ['https://www.tripadvisor.com.vn/Hotels-g293924-Hanoi-Hotels.html']
    

    def parse(self, response):
        
        for hotel in response.css('div.listing'):
            detail_page =  hotel.css('a.property_title::attr(href)').get()
            skip_page = response.urljoin(detail_page)
            yield response.follow(skip_page, callback=self.start_scraping)

        next_page =  response.css('a.next::attr(href)').get()
        if BookingSpider.page_number <= 1:
            BookingSpider.page_number += 1
            yield response.follow(next_page, callback=self.parse)

    def start_scraping(self, response):
        item = HotelItem()

        item['hotel_name'] =  response.css('h1.fkWsC::text').get()
        item['hotel_addr'] = response.css('span.ceIOZ::text').get()
        item['hotel_imagelink'] = response.css('img.bMGfJ::attr(src)').get()
        item['source'] = []
        for source in response.css('div.dowyF'):
            item['source'].append(
                { "source_name": source.css('div.ui_columns img.eEuEr::attr(alt)').get(),
                  "hotel_price": source.css('div.cBLdK div.fzleB::text').get(),
                  "hotel_orderlink": response.request.url,
                }
            )
        yield item
