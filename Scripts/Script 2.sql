
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE SelectPersonal
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [IdPersonal]
		  ,[ApPaterno]
		  ,[ApMaterno]
		  ,[Nombre1]
		  ,[Nombre2]
		  ,[NombreCompleto]
		  ,[FhcNac]
		  ,[FhcIngreso]
	FROM [dbo].[Personal]
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE SelectPersonalById
@IdPersonal INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [IdPersonal]
		  ,[ApPaterno]
		  ,[ApMaterno]
		  ,[Nombre1]
		  ,[Nombre2]
		  ,[NombreCompleto]
		  ,[FhcNac]
		  ,[FhcIngreso]
	FROM [dbo].[Personal]
	WHERE
		IdPersonal = @IdPersonal
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE InsertPersonal
@ApPaterno	VARCHAR(50)
,@ApMaterno VARCHAR(50)
,@Nombre1   VARCHAR(50)
,@Nombre2   VARCHAR(50)
,@FhcNac    DATE
,@FhcIngreso DATE
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO [dbo].[Personal]
			   ([ApPaterno]
			   ,[ApMaterno]
			   ,[Nombre1]
			   ,[Nombre2]
			   ,[FhcNac]
			   ,[FhcIngreso])
     VALUES
           (@ApPaterno,
		   @ApMaterno,
		   @Nombre1,
		   @Nombre2,
		   @FhcNac,
		   @FhcIngreso)
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE UpdatePersonal
@IdPersonal INT
,@ApPaterno	VARCHAR(50)
,@ApMaterno VARCHAR(50)
,@Nombre1   VARCHAR(50)
,@Nombre2   VARCHAR(50)
,@FhcNac    DATE
,@FhcIngreso DATE
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE [dbo].[Personal]
	SET [ApPaterno] = @ApPaterno
		  ,[ApMaterno] = @ApMaterno
		  ,[Nombre1] = @Nombre1
		  ,[Nombre2] = @Nombre2
		  ,[FhcNac] = @FhcNac
		  ,[FhcIngreso] = @FhcIngreso
	WHERE [IdPersonal] = @IdPersonal
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE DeletePersonal
@IdPersonal INT
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN TRA1
		BEGIN TRY
			DELETE FROM [dbo].[Hijos]
			WHERE [IdPersonal] = @IdPersonal

			DELETE FROM [dbo].[Personal]
			WHERE [IdPersonal] = @IdPersonal
		
			COMMIT TRAN TRA1
		END TRY
		BEGIN CATCH
			ROLLBACK TRAN TRA1
			RAISERROR ('Ocurrió un error al eliminar al personal y sus hijos.', 15, 1)
			PRINT ERROR_MESSAGE()
			PRINT ERROR_SEVERITY()
			PRINT ERROR_NUMBER()
			PRINT ERROR_LINE()
		END CATCH
END

GO

