import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(meetupData) {
      
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup = {addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
