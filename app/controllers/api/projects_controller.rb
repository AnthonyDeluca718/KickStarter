class Api::ProjectsController < ApplicationController

	def create
		@user = Project.new(project_params)

		if @project.save
			render "api/projects/show"
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

  def edit
    @project = Project.find_by(id: params[:id])

    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

	private

	def project_params
		params.require(:project).permit(:title, :user_id, :photo_url, :bio, :description, :end_date, )
	end

end
