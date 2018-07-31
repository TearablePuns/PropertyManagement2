import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }
    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Tristique magna sit amet purus gravida quis blandit. Tempus egestas sed sed risus pretium. Sed id semper risus in hendrerit gravida rutrum quisque. Iaculis at erat pellentesque adipiscing commodo elit at. Et ultrices neque ornare aenean. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Id diam vel quam elementum pulvinar etiam non. Leo vel orci porta non pulvinar neque laoreet suspendisse. Amet cursus sit amet dictum sit amet.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }
        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}
export default NewsletterGrid;